class YelpController < ApplicationController

  def search
    client = Yelp::Client.new({
      consumer_key: "IzBOsSutQXAXTf_BiIOh6Q",
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

    chosen_stop = response.businesses.sample

    response_array << { id: chosen_stop.location.coordinate.latitude, name: chosen_stop.name, categories: chosen_stop.categories, image_url: chosen_stop.image_url, rating: chosen_stop.rating, address: chosen_stop.location.address, city: chosen_stop.location.city, state: chosen_stop.location.state_code, review_count: chosen_stop.review_count, phone: chosen_stop.phone, description: chosen_stop.snippet_text }

    response_json = response_array.to_json

    render json: response_json
  end

end
