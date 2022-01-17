json.extract! report, :id, :date, :value, :created_at, :updated_at
json.url report_url(report, format: :json)
