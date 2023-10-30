// Baillie–PSW primality test
function PSW(n, k = 5) {
    if (n === 2n || n === 3n) return true;
    if (n < 2n || n % 2n === 0n) return false;
    if (n < 9n) return true;

    let r = 0n;
    let d = n - 1n;
    while (d % 2n === 0n) {
        d /= 2n;
        r++;
    }

    const witnesses = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n, 101n, 103n, 107n, 109n, 113n, 127n, 131n, 137n, 139n, 149n, 151n, 157n, 163n, 167n, 173n];

    const witnessTest = (a, d, n, r) => {
        let x = modPow(a, d, n);
        if (x === 1n || x === n - 1n) return true;
        for (let i = 1n; i < r; i++) {
            x = modPow(x, 2n, n);
            if (x === n - 1n) return true;
        }
        return false;
    };

    const modPow = (base, exp, mod) => {
        let result = 1n;
        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp /= 2n;
        }
        return result;
    };

    for (let i = 0; i < k; i++) {
        const a = witnesses[i];
        if (a >= n) break;
        if (!witnessTest(a, d, n, r)) return false;
    }
    return true;
}

function checkPrime() {
  let num = BigInt(document.getElementById("numInput").value);
  
  let isPrime = PSW(num);

  if (isPrime) {
    document.getElementById("status").innerHTML = "a prime!";
    document.getElementById("status").className = "prime"; 
  } else {
    document.getElementById("status").innerHTML = "not a prime.";
    document.getElementById("status").className = "not-prime";
  }
}