class YelpController < ApplicationController

  def search
    client = Yelp::Client.new({consumer_key: "IzBOsSutQXAXTf_BiIOh6Q",
      consumer_secret: "QUkid2YjU52XRz5w8aFjpW1JZv0",
      token: "DAHaattUWvPnyXuawR0dVNJLwSNf1EGH",
      token_secret: "TP3Mgv8lOrOov5oKj_LD3KsfEy8"
      })

    queries = {
      term: params["type"],
      limit: 10,
      range: params["range"],
    }

    response = client.search("#{params["city"]}, #{params["state"]}", queries)

    response_array = []

    response.businesses.each do |business|
      response_array << {id: business.location.coordinate.latitude, name: business.name, categories: business.categories, image_url: business.image_url, rating: business.rating, address: business.location.address, city: business.location.city, state: business.location.state_code, review_count: business.review_count, phone: business.phone}
    end

    response_json = response_array.to_json

    render json: response_json
  end

end
