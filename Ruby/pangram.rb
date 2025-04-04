def input(sentence)
  sentence.replace(gets.chomp)
end

def output(sentence)
  print check(sentence).to_s
end

def check(sentence)
  letters = Hash.new(0)
  sentence.each_char { |s| letters[s] += 1 }
  isPan = true
  ("a".."z").each do |c|
    if letters[c] == 0
      puts "There is no #{c}"
      isPan = false
    end
  end
  isPan
end

sentence = ""
input(sentence)
output(sentence)