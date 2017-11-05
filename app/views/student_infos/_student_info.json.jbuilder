json.extract! student_info, :id, :name, :number, :major, :email, :created_at, :updated_at
json.url student_info_url(student_info, format: :json)
