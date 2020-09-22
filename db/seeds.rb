require "faker"

Thing.destroy_all
5.times do |i|
  Thing.create(name: Faker::Name.name)
end
