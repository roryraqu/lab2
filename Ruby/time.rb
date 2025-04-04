def input
  gets.to_i
end

def output(n)
  first = true
  n.times do
    num = gets.to_i
    puts num % 100 < 60 && num / 100 < 24 ? "YES" : "NO"
    first = false
  end
end

n = input
output(n)