module "savoria_restaurant" {
  source      = "./modules/s3-website"
  bucket_name = var.savoria_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "savoria-restaurant"
  }
}

module "luxe_salon_spa" {
  source      = "./modules/s3-website"
  bucket_name = var.luxe_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "luxe-salon-spa"
  }
}

module "crestview_financial" {
  source      = "./modules/s3-website"
  bucket_name = var.crestview_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "crestview-financial"
  }
}
