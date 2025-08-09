output "app_service_url" {
  value = azurerm_linux_web_app.app.default_hostname
}

output "key_vault_uri" {
  value = azurerm_key_vault.kv.vault_uri
}