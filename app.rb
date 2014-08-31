require 'sinatra'
# I made this simple sintra app because my browser rejected geolocation requests not running through a server, virtual or otherwise.
get '/' do
	erb :index
end