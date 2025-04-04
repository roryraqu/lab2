YES = 1
NO = -1
EQ = 0

def input(str)
  str.replace(gets.chomp)
end

def output(str)
  result = check(str)
  print result == YES ? "Да" : (result == NO ? "Нет" : "Одинаково")
end

def check(str)
  numOfVowels = 0
  numOfConsonants = 0
  numOfOthers = 0

  str.each_char do |s|
    if isVowel(s)
      numOfVowels += 1
    elsif s != ' '
      numOfConsonants += 1
    else
      numOfOthers += 1
    end
  end

  numOfVowels > numOfConsonants ? YES : (numOfVowels < numOfConsonants ? NO : EQ)
end

def isVowel(s)
  vowels = "aeiouyAEIOUY"
  vowels.include?(s)
end

str = ""
input(str)
output(str)