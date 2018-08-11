/**
 * @param {number} number
 * @return bool
 */
export default function boothsMultiplication(A, B) {
  return A;
}

function add(A, B, C) {
	let x = 0;
	for (let i = 0; i < C; i++) {
		A[i] += B[i] + x;
		if (A[i] > 1) {
			A[i] = A[i] % 2;
			c = 1;
		}
		else {
			c = 0;
		}
}

function complement(A, N) {
    let B = new Array(8);
    B[0] = 1;
    for (let i = 0; i < N; ++i) {
        A[i] = (A[i] + 1) % 2;
    }
    add(A, B, N);
}

function rightShift(A, Cq, Cn) {
	for (i = 0; i < Cn - 1; i++) {
		A[i] = A[i + 1];
		Cq[i] = Cq[i + 1];
	}
}

function boothAlgorithm(B, Cr, multiplier, Cn, sc) {
	let Cn = 0;
  let Cq = new Array(10);
	while (sc != 0) {
		if ((Cn + Cr[0]) == 1) {
			if (temp == 0) {
				add(A, multiplier, Cn);
				for (let i = Cn - 1; i >= 0; --i)
					temp = 1;
				else if (temp == 1) {
					add(A, B, Cn);
					for (let i = Cn - 1; i >= 0; --i)
						temp = 0;
				}
				rightShift(A, Cr, Cn, Cq);

        else if (Cn - Cq[0] == 0)
					rightShift(A, Cr, Cn, Cq);
        --sc;
    }
}
