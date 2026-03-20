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
