module CalendarsHelper

def body_form_column(record, input_name)

 fckeditor_textarea( :object, :body, :toolbarSet => 'Simple', :name=> input_name, :width => "800px", :height => "200px" )

end

end
