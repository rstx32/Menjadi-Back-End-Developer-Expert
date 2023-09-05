const createServer = require('./createServer')
const FigureCalculator = require('./FigureCalculator')
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

  describe('when GET /rectangle/perimeter/{length}/{width}', () => {
    it('should respond with a status code of 200 and the payload value is rectangle perimeter result of length and width correctly', async () => {
      // arrange
      const length = 5
      const width = 7
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyRectanglePerimeter = jest.spyOn(
        figureCalculator,
        'calculateRectanglePerimeter'
      )
      const server = createServer({ figureCalculator })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(24)
      expect(spyRectanglePerimeter).toBeCalledWith(length, width)
    })
  })

  describe('when GET /rectangle/area/{length}/{width}', () => {
    it('should respond with a status code of 200 and the payload value is rectangle area result of length and width correctly', async () => {
      // arrange
      const length = 5
      const width = 7
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyRectangleArea = jest.spyOn(
        figureCalculator,
        'calculateRectangleArea'
      )
      const server = createServer({ figureCalculator })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(35)
      expect(spyRectangleArea).toBeCalledWith(length, width)
    })
  })

  describe('when GET /triangle/perimeter/{sideA}/{sideB}/{base}', () => {
    it('should respond with a status code of 200 and the payload value is rectangle area result of length and width correctly', async () => {
      // arrange
      const sideA = 5
      const sideB = 4
      const base = 3
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyTrianglePerimeter = jest.spyOn(
        figureCalculator,
        'calculateTrianglePerimeter'
      )
      const server = createServer({ figureCalculator })

      // action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      })

      // assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(12)
      expect(spyTrianglePerimeter).toBeCalledWith(sideA, sideB, base)
    })
  })
})
