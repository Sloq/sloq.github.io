

  export const calculateLeftPupil = (xVal, centerWidthLeft, centerWidthTrue, leftEdge) => {
    let lMoveX = '';
    if (xVal < leftEdge) {
        lMoveX = '35%';
    } else if (xVal > centerWidthTrue) {
        lMoveX = '65%';
    } else if (xVal <= centerWidthLeft) {
        let leftVal = 50 - (15 * ((centerWidthLeft - xVal) / (centerWidthLeft - leftEdge)));
        leftVal = Math.floor(leftVal);
        lMoveX = `${leftVal}%`
    } else if (xVal > centerWidthLeft) {
        let leftVal = 65 - 15 * ((centerWidthTrue - xVal)/ (centerWidthTrue - centerWidthLeft));
        leftVal = Math.floor(leftVal);
        lMoveX = `${leftVal}%`
    } else {
        lMoveX = '50%';
        console.log('lMoveX error')
    }

    return lMoveX;
}

export const calculateRightPupil = (xVal, centerWidthTrue, centerWidthRight, rightEdge) => {
    let rMoveX = '';

    if (xVal < centerWidthTrue) {
        rMoveX = '35%';
    } else if (xVal > rightEdge) {
        rMoveX = '65%';
    } else if (xVal <= centerWidthRight) {
        let rightVal = 50 - (15 * ((centerWidthRight - xVal) / (centerWidthRight - centerWidthTrue)));
        rightVal = Math.floor(rightVal);
        rMoveX = `${rightVal}%`
    } else if (xVal > centerWidthRight) {
        let rightVal = 50 + 15 * ((xVal - centerWidthRight)/ (rightEdge - centerWidthRight));
        rightVal = Math.floor(rightVal);
        rMoveX = `${rightVal}%`
    } else {
        rMoveX = '50%'
        console.log('rMoveX error')
    }

    return rMoveX;
}

export const calculatePupilHeight = (yVal, centerHeight, yBottom, yTop) => {
    let yMove = '';

    if (yVal < yTop) {
        yMove = '25%'
    } else if (yVal > (yBottom)) {
        yMove = '75%'
    } else if (yVal < centerHeight) {
        let yInt = 50 - 25 * ((centerHeight - yVal)/(centerHeight - yTop) )
        yInt = Math.floor(yInt);
        yMove = `${yInt}%`;
    } else if (yVal > centerHeight) {
        let yInt = 50 + 25 * ((yVal - centerHeight)/(yBottom - centerHeight))
        yInt = Math.floor(yInt);
        yMove = `${yInt}%`;
    }

    return yMove;
}

export const calculateBrow = (yVal, yTop, yBottom) => {
    if (yVal < yTop) {
        yVal = yTop;
    } else if (yVal> yBottom) {
        yVal = yBottom
    }
    let bMoveIntLeft = -20 + 30 * ((yVal - yTop)/(yBottom-yTop))
    return Math.floor(bMoveIntLeft);
}