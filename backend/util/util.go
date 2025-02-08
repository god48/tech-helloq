package util

import (
	"backend/models"
	"log"
	"os"

	"gopkg.in/yaml.v2"
)

// LoadSMTPConfig は smtpserver.yml から設定を読み込みます
func LoadSMTPConfig(filePath string) (*models.SMTPConfig, error) {
	file, err := os.Open(filePath)
	if err != nil {
		log.Printf("YAMLファイルの読み込みエラー: %v", err)
		return nil, err
	}
	defer file.Close()

	var config struct {
		SMTP models.SMTPConfig `yaml:"smtp"`
	}
	decoder := yaml.NewDecoder(file)

	// デコードしてみる
	err = decoder.Decode(&config)
	if err != nil {
		log.Printf("YAMLデコードエラー: %v", err)
		return nil, err
	}

	// デバッグログ
	log.Printf("YAMLデコード結果: %+v", config)

	return &config.SMTP, nil
}
