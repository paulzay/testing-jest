import analyze from './arrayAnalysis';

it('Analyze array', () => {
    expect(analyze([0,3,4,6,7,2,1]))
    .toEqual({
        average:3,
        min: 0,
        max: 7,
        length: 7
    })
})