variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "savoria_bucket_name" {
  description = "S3 bucket name for Savoria Restaurant website"
  type        = string
  default     = "savoria-restaurant-demo"
}

variable "luxe_bucket_name" {
  description = "S3 bucket name for Luxe Salon & Spa website"
  type        = string
  default     = "luxe-salon-spa-demo"
}

variable "crestview_bucket_name" {
  description = "S3 bucket name for Crestview Financial website"
  type        = string
  default     = "crestview-financial-demo"
}
