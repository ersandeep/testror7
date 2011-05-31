class SortablesController < ApplicationController
  attr_accessor  :record_listing_id

 def index
  @sortable=Sortable.find(:all , :order => "record_listing_id ASC")
end

def updateorder
   @ar=params[:changedarray]

   @arrnew=@ar.split(',')


  a=1
   @arrnew.each do |i|
   @object = Sortable.find_by_id(i)
   @object.record_listing_id=a
   @object.save
   a=a+1
  end


end



end
