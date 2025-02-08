package models

// FormData はお問い合わせフォームから送信されるデータの構造体です
type FormData struct {
	Type    string `json:"type"`
	Company string `json:"company"`
	Name    string `json:"name"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type SMTPConfig struct {
	Host     string `yaml:"host"`     // SMTP サーバーのホスト名
	Port     string `yaml:"port"`     // SMTP サーバーのポート番号
	Username string `yaml:"username"` // SMTP 認証のユーザー名
	Password string `yaml:"password"` // SMTP 認証のパスワード
	From     string `yaml:"from"`     // メール送信者
	To       string `yaml:"to"`       // メール受信者
}
