class CalendarsController < ApplicationController

  require 'json'
  require 'date'
  ActiveRecord::Base.include_root_in_json = false
  attr_accessor :start, :end,:title,:location,:body 

def index

end

def cevent

    @calendar = Calendar.new

    @calendar.start=DateTime.parse("#{params[:start]}")
    @calendar.end=DateTime.parse("#{params[:end]}")
    @calendar.title=params[:title]
    @calendar.location=params[:location]
    @calendar.body=params[:body]

   @calendar.save

end

  def devent
       @dbevent = Calendar.find(:all)

       @json= @dbevent.to_json(:only => [ :id, :start,:end,:title, :location,:body])
       print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #{@json}")
end

 def uevent


    @upevent = Calendar.find_by_id(params[:id])

    @upevent.start=DateTime.parse("#{params[:start]}")
    @upevent.end=DateTime.parse("#{params[:end]}")
    @upevent.title=params[:title]
    @upevent.location=params[:location]
    @upevent.body=params[:body]

    @upevent.save



end
def dlevent
  @dlevent = Calendar.find_by_id(params[:id])
  @dlevent.delete
end
def title


end
def location


end
def bodyf
#ddd

end



end
