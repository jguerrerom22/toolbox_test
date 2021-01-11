const request = require('supertest')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const expect = require('chai').expect
const app = require('./index')

describe('GET /iecho', function () {
  it('Must send "text" query param', async function () {
    const response = await request(app).get('/iecho')
    expect(response.status).to.eql(400)
  })

  it('Must send "text" query param', async function () {
    const response = await request(app).get('/iecho?otherParam=hola')
    expect(response.status).to.eql(400)
  })

  it('Returns inverse text of "hola" and palindromo false', async function () {
    const response = await request(app).get('/iecho?text=hola')
    expect(response.status).to.eql(200)
    const attributes = response.body
    expect(attributes.text).to.eql('aloh')
    expect(attributes.palindromo).to.eql(false)
  })

  it('Returns inverse text of "ejemplo" and palindromo true', async function () {
    const response = await request(app).get('/iecho?text=reconocer')
    expect(response.status).to.eql(200)
    const attributes = response.body
    expect(attributes.text).to.eql('reconocer')
    expect(attributes.palindromo).to.eql(true)
  })
})
