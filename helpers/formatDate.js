const dayjs = require('dayjs');

function formatDate(date) {
    const formatted = dayjs(date).format('MMM D, YYYY [at] h:mm A');
    return formatted;
}

module.exports = formatDate;