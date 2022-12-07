puts 'starting'

file = File.open('input.txt', 'r')
content = file.readlines.map(&:chomp)
file.close

def get_game_result(pattern)
  result = 0
  pattern[' '] = ''
  if (pattern.match?(/(AY)|(BZ)|(CX)/))
    result += 6
  elsif (pattern.match?(/(AX)|(BY)|(CZ)/))
    result += 3
  end

  if (pattern.include?("X"))
    result += 1
  elsif (pattern.include?("Y"))
    result += 2
  elsif (pattern.include?("Z"))
    result += 3
  end

  result
end

def get_corrected_game_result(pattern)
  result = 0
  pattern[' '] = ''

  if    (pattern.match?(/(AY)|(BX)|(CZ)/))
    result += 1
  elsif (pattern.match?(/(BY)|(CX)|(AZ)/))
    result += 2
  elsif (pattern.match?(/(CY)|(AX)|(BZ)/))
    result += 3
  end

  if (pattern.include?("Y"))
    result += 3
  elsif (pattern.include?("Z"))
    result += 6
  end

  result
end

results = content.map{ |pattern| get_corrected_game_result(pattern) }.reduce{ |sum, n| sum + n }
puts results