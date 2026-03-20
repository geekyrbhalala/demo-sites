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

module "inkcraft_tattoo" {
  source      = "./modules/s3-website"
  bucket_name = var.inkcraft_tattoo_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "inkcraft-tattoo"
  }
}

module "apex_auto_detail" {
  source      = "./modules/s3-website"
  bucket_name = var.apex_auto_detail_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "apex-auto-detail"
  }
}

module "zenflow_yoga" {
  source      = "./modules/s3-website"
  bucket_name = var.zenflow_yoga_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "zenflow-yoga"
  }
}
