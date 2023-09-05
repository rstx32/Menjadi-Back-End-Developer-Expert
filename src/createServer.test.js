const createServer = require('./createServer')
const MathBasic = require('./MathBasic')

describe('A HTTP Server', () => {
  describe('When GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // arrange
      const a = 10
      const b = 20
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const server = createServer({ mathBasic: MathBasic })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(30)
      expect(spyAdd).toBeCalledWith(a, b)
    })
  })

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is substraction result of a and b correctly', async () => {
      // arrange
      const a = 12
      const b = 8
      const spySubtract = jest.spyOn(MathBasic, 'subtract')
      const server = createServer({ mathBasic: MathBasic })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(4)
      expect(spySubtract).toBeCalledWith(a, b)
    })
  })

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiply result of a and b correctly', async () => {
      // arrange
      const a = 4
      const b = 3
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const server = createServer({ mathBasic: MathBasic })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(12)
      expect(spyMultiply).toBeCalledWith(a, b)
    })
  })

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
      // arrange
      const a = 12
      const b = 3
      const spyDivide = jest.spyOn(MathBasic, 'divide')
      const server = createServer({ mathBasic: MathBasic })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(4)
      expect(spyDivide).toBeCalledWith(a, b)
    })
  })
})
