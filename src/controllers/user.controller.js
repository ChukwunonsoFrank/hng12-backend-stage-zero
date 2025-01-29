export default {
  index: (request, response, next) => {
    function computeDateTimeInISO8601Format() {
      const currentDate = new Date()
      const iso8601Timestamp = currentDate.toISOString()
      return iso8601Timestamp
    }

    response.status(200).json({
      email: 'franknonso114@gmail.com',
      current_datetime: computeDateTimeInISO8601Format(),
      github_url: "https://github.com/ChukwunonsoFrank/hng12-backend-stage-zero",
    })
  }
}
