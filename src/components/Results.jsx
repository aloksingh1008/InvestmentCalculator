import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({para}){
    const results = calculateInvestmentResults(
      para.initial,
      para.annual,
      para.return,
      para.duration
    );
    const initialInvestement =
      results[0].valueEndOfYear -
      results[0].interest -
      results[0].annualInvestment;
    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((data) => {
            const totalInterest =
              data.valueEndOfYear -
              data.year * data.annualInvestment -
              initialInvestement;
            const totalAnnual = data.valueEndOfYear - totalInterest;
            return (
              <tr key={data.year}>
                <td>
                  {formatter.style}
                  {data.year}
                </td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAnnual)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}