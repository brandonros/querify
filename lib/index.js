function formatQueryParameter(parameter) {
  if (typeof parameter === 'string') {
    return `'${parameter}'`;
  } else if (Array.isArray(parameter)) {
    return parameter.map(function(value) {
      return formatQueryParameter(value);
    }).join(', ');
  }

  return parameter; 
}

module.exports = function(sql, parameters) {
  return sql.replace(/\{([^\}]+)\}?/g, function(match, key) { 
    return formatQueryParameter(parameters[key]);
  });
};
