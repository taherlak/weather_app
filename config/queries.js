module.exports = {
    'saveAuditLogs': 'INSERT INTO audit_logs (request_type, response_data) VALUES (?, ?)'
}