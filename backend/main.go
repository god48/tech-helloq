package main

import (
	"backend/handler"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
)

func main() {
	conn, err := net.Dial("tcp", "smtp.gmail.com:587")
	if err != nil {
		fmt.Println("SMTP サーバーへの接続に失敗しました:", err)
	} else {
		fmt.Println("SMTP サーバーへの接続に成功しました")
		conn.Close()
	}

	if _, err := os.Stat("./config/smtpserver.yml"); os.IsNotExist(err) {
		log.Fatalf("SMTP設定ファイルが見つかりません: %v", err)
	} else if err != nil {
		log.Fatalf("SMTP設定ファイルの確認中にエラーが発生しました: %v", err)
	} else {
		log.Println("SMTP設定ファイルが正しく見つかりました")
	}

	// エンドポイントのハンドラーを設定
	http.HandleFunc("/contact", handler.ContactHandler)

	// サーバー起動
	fmt.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
