variable "location" {
  description = "Azure region"
  default     = "East US"
}

variable "resource_group_name" {
  default     = "devops-dashboard-rg"
}

variable "app_service_plan_name" {
  default     = "devops-dashboard-plan"
}

variable "app_service_name" {
  default     = "devops-dashboard-app"
}

variable "key_vault_name" {
  default     = "devops-dashboard-kv"
}