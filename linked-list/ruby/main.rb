module NodeChains
  class Node
    attr_accessor :value, :next_value

    def initialize(value, next_value = nil)
      @value = value
      @next_value = next_value
    end
  end

  class LinkedList
    attr_accessor :head, :tail, :count

    def initialize
      @head = nil
      @tail = nil
      @count = 0
    end

    def add_first(node)
      temp = @head
      @head = node
      @head.next_value = temp
      @count += 1
      if @count == 1
        @tail = @head
      end
    end

    def add_last(node)
      if @count.zero?
        puts 'count is zero'
        @head = @tail
      else
        puts 'count is not zero'
        @tail.next_value = node
      end
      @tail = node
      @count += 1
    end

    def remove_first
      unless @count.zero?
        @head = @head.next_value
        @count -= 1
        @tail = nil if @count.zero?
      end
    end

    def remove_last
      unless @count.zero?
        if @count == 1
          @head = @tail = nil
        else
          current = @head
          until current.next_value == @tail
            current = current.next_value
          end
          current.next_value = nil
          @tail = current
        end
        @count -= 1
      end
    end
  end
end


def print_list(node)
  while node
    puts node.value
    node = node.next_value
  end
end

first = NodeChains::Node.new(5)
second = NodeChains::Node.new(10)
third = NodeChains::Node.new(2)

ll = NodeChains::LinkedList.new

ll.add_first(first)
ll.add_first(second)
ll.add_last(third)

puts 'Print All'
print_list(ll.head)

ll.remove_first
puts 'Remove First'
print_list(ll.head)

ll.remove_last
puts 'Remove Last'
print_list(ll.head)