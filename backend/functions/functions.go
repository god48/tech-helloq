package functions

import (
	"backend/models"
	"fmt"
	"log"
	"net/smtp"
)

// SendEmail はSMTP設定に基づいてメールを送信します
func SendEmail(config *models.SMTPConfig, formData models.FormData) error {
	// メール内容のフォーマット
	subject := "お問い合わせフォームからの通知"
	body := fmt.Sprintf(`以下の内容でお問い合わせを受け取りました:
お問い合わせの種類: %s
会社名: %s
名前: %s
電話番号: %s
メールアドレス: %s
メッセージ: %s`,
		formData.Type, formData.Company, formData.Name, formData.Phone, formData.Email, formData.Message)

	msg := fmt.Sprintf("From: %s\nTo: %s\nSubject: %s\n\n%s", config.From, config.To, subject, body)

	// SMTP認証
	auth := smtp.PlainAuth("", config.Username, config.Password, config.Host)

	log.Printf("SMTPサーバー接続情報: ホスト=%s, ポート=%s, ユーザー=%s", config.Host, config.Port, config.Username)

	// メール送信
	err := smtp.SendMail(config.Host+":"+config.Port, auth, config.From, []string{config.To}, []byte(msg))
	if err != nil {
		log.Printf("メール送信エラー: %v", err)
		return err
	}

	log.Println("メール送信に成功しました")
	return nil
}
