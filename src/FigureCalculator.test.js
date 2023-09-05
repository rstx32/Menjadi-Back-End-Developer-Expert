const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({})

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter')
    expect(figureCalculator).toHaveProperty('calculateRectangleArea')
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
    expect(figureCalculator).toHaveProperty('calculateTriangleArea')
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(
      Function
    )
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function)
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function)
  })

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() =>
        figureCalculator.calculateRectanglePerimeter()
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(1)
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(1, 2, 3)
      ).toThrowError()
    })

    it('should throw error when given with non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() =>
        figureCalculator.calculateRectanglePerimeter(true, {})
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(null, '2')
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateRectanglePerimeter([], {})
      ).toThrowError()
    })

    it('should return correct value based on rectangle perimeter formula', () => {
      // arrange
      const length = 20
      const width = 10
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      // action
      const result = figureCalculator.calculateRectanglePerimeter(length, width)

      // assert
      expect(result).toEqual(60)
      expect(spyAdd).toHaveBeenCalledWith(length, width)
      expect(spyMultiply).toHaveBeenCalledWith(2, 30)
    })
  })

  describe('A calculateRectangleArea', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError()
      expect(() =>
        figureCalculator.calculateRectangleArea(1, 2, 3)
      ).toThrowError()
    })

    it('should throw error when given with non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() =>
        figureCalculator.calculateRectanglePerimeter(true, {})
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(null, '2')
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateRectanglePerimeter([], {})
      ).toThrowError()
    })

    it('should return correct value based on rectangle area formula', () => {
      // arrange
      const length = 20
      const width = 10
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      // action
      const result = figureCalculator.calculateRectangleArea(length, width)

      // assert
      expect(result).toEqual(200)
      expect(spyMultiply).toHaveBeenCalledWith(20, 10)
    })
  })

  describe('A calculateTrianglePerimeter', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError()
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(1)
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(1, 2)
      ).toThrowError()
    })

    it('should throw error when given with non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() =>
        figureCalculator.calculateTrianglePerimeter(true, {}, [])
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(null, '2', 2)
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateTrianglePerimeter([], {}, false)
      ).toThrowError()
    })

    it('should return correct value based on rectangle area formula', () => {
      // arrange
      const sideA = 20
      const sideB = 20
      const base = 10
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const figureCalculator = new FigureCalculator(MathBasic)

      // action
      const result = figureCalculator.calculateTrianglePerimeter(
        sideA,
        sideB,
        base
      )

      // assert
      expect(result).toEqual(50)
      expect(spyAdd).toHaveBeenCalledWith(40, 10)
    })
  })

  describe('A calculateTriangleArea', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError()
      expect(() =>
        figureCalculator.calculateTriangleArea(1)
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateTriangleArea(1, 2)
      ).toThrowError()
    })

    it('should throw error when given with non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() =>
        figureCalculator.calculateTriangleArea(true, {}, [])
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateTriangleArea(null, '2', 2)
      ).toThrowError()
      expect(() =>
        figureCalculator.calculateTriangleArea([], {}, false)
      ).toThrowError()
    })

    it('should return correct value based on triangle area formula', () => {
      // arrange
      const sideA = 50
      const sideB = 40
      const base = 30
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const spyDivide = jest.spyOn(MathBasic, 'divide')
      const figureCalculator = new FigureCalculator(MathBasic)

      // action
      const result = figureCalculator.calculateTriangleArea(
        sideA,
        sideB,
        base
      )

      // assert
      expect(result).toEqual(600)
      expect(spyMultiply).toHaveBeenCalledWith(30, 40)
      expect(spyDivide).toHaveBeenCalledWith(1200, 2)
    })
  })
})
