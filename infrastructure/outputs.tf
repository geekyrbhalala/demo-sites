output "savoria_website_url" {
  description = "Savoria Restaurant website URL"
  value       = "http://${module.savoria_restaurant.website_endpoint}"
}

output "luxe_website_url" {
  description = "Luxe Salon & Spa website URL"
  value       = "http://${module.luxe_salon_spa.website_endpoint}"
}

output "crestview_website_url" {
  description = "Crestview Financial Advisors website URL"
  value       = "http://${module.crestview_financial.website_endpoint}"
}

output "inkcraft_website_url" {
  description = "Inkcraft Tattoo Studio website URL"
  value       = "http://${module.inkcraft_tattoo.website_endpoint}"
}

output "apex_website_url" {
  description = "Apex Auto Detail website URL"
  value       = "http://${module.apex_auto_detail.website_endpoint}"
}

output "zenflow_website_url" {
  description = "Zenflow Yoga & Wellness website URL"
  value       = "http://${module.zenflow_yoga.website_endpoint}"
}
