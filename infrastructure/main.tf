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

module "pristine_cleaning" {
  source      = "./modules/s3-website"
  bucket_name = var.pristine_cleaning_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "pristine-cleaning"
  }
}

module "spice_bazaar" {
  source      = "./modules/s3-website"
  bucket_name = var.spice_bazaar_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "spice-bazaar-grocery"
  }
}

module "harmony_music" {
  source      = "./modules/s3-website"
  bucket_name = var.harmony_music_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "harmony-music-academy"
  }
}

module "evergreen_landscaping" {
  source      = "./modules/s3-website"
  bucket_name = var.evergreen_landscaping_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "evergreen-landscaping"
  }
}

module "northgate_law" {
  source      = "./modules/s3-website"
  bucket_name = var.northgate_law_bucket_name

  tags = {
    Project = "demo-sites"
    Website = "northgate-law"
  }
}
