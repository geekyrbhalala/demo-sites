terraform {
  backend "s3" {
    bucket  = "terraform-state-geekyrbhalala"
    key     = "demo-sites/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
