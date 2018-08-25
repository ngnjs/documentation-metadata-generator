const test = require('tap').test
const path = require('path')
const outputFile = path.join(__dirname, 'output', 'api.json')
const data = require(outputFile)

test('Namespaces', t => {
  const ns = data.namespaces

  t.ok(ns.global, 'Global namespace autogenerated.')
  t.ok(ns.DERIVED && ns.TEST, 'Root level scope exists (comment generated).')
  t.ok(ns.TEST.namespaces.NS, 'Nested scope exists (comment generated).')
  t.ok(ns.Vehicle, 'Root scope exists (AST generated).')
  t.ok(ns.Vehicle.namespaces.water, 'Nested scope exists (AST generated).')

  t.ok(ns.Vehicle.classes.indexOf('Vehicle.Base') >= 0 && data.classes.hasOwnProperty('Vehicle.Base'), 'Contains valid class mappings.')

  t.end()
})
