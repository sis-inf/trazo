export function checkConvergence(xNew, xOld, tol) {
    const lastDiff = Math.abs(xNew - xOld);
    const converged = lastDiff < tol;
    return { converged, lastDiff };
}
