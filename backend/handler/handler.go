package handler

import (
	"backend/functions"
	"backend/models"
	"backend/util"
	"encoding/json"
	"log"
	"net/http"
)

// ContactHandler は /contact エンドポイントのリクエストを処理します
func ContactHandler(w http.ResponseWriter, r *http.Request) {
	// CORS 設定
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// OPTIONS リクエストの処理
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	// POST メソッド以外を拒否
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	// リクエストボディをデコード
	var formData models.FormData
	err := json.NewDecoder(r.Body).Decode(&formData)
	if err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	// フォームデータのログ出力
	log.Printf("フォームデータ受信: %+v\n", formData)

	// SMTP 設定のロード
	// config, err := util.LoadSMTPConfig("backend/config/smtpserver.yml")
	// config, err := util.LoadSMTPConfig("./backend/config/smtpserver.yml")
	config, err := util.LoadSMTPConfig("./config/smtpserver.yml")
	if err != nil {
		http.Error(w, "サーバー設定の読み込みエラー", http.StatusInternalServerError)
		return
	}

	// メール送信
	err = functions.SendEmail(config, formData)
	if err != nil {
		http.Error(w, "メール送信に失敗しました", http.StatusInternalServerError)
		return
	}

	// レスポンスを返す
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "お問い合わせを受け付けました。"})
}
