'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Section {
  heading: string
  content: React.ReactNode
}

interface TaxItem {
  id: number
  title: string
  intro?: string
  sections: Section[]
}

const taxItems: TaxItem[] = [
  {
    id: 1,
    title: 'Company Income Tax',
    intro:
      'Corporate Income Tax (CIT) is governed by the Nigeria Tax Act, 2025, also known as "Company Income Tax" and administered by the Nigeria Revenue Service (NRS). The tax is imposed on the income, profits, or gains of a person accruing in or derived from Nigeria.',
    sections: [
      {
        heading: 'Chargeable Income',
        content: (
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            {[
              'Profits or gains from any trade, business, profession, or vocation;',
              'Royalties, fees, rents, or interest from the use, exploitation, or occupation of any property;',
              'Dividends, premiums, charges, or annuities;',
              'Fees, dues, allowances, or any remuneration for services rendered;',
              'Discounts or rebates;',
              'Income from the disposal of money or money instruments;',
              'Income, profits, or gains from the disposal or lending of securities;',
              'Prizes, winnings, honoraria, grants, awards, laurels, and similar receipts;',
              'Profits or gains from the disposal of property or fixed assets;',
              'Profits or gains from transactions involving digital or virtual assets; and',
              'Any other income, profit, or gain not specifically covered under the preceding categories.',
            ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ),
      },
      {
        heading: 'Taxable Amount',
        content: (
          <p className="text-gray-600 text-sm leading-relaxed">
            The taxable amount is the company's profits for the relevant accounting year or period, determined after deducting <strong>allowable expenses</strong> and <strong>applicable reliefs and deductions</strong> as provided under Chapter 2 of the Nigeria Tax Act, 2025.
          </p>
        ),
      },
      {
        heading: 'Eligibility to File',
        content: (
          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Nigerian Company</p>
              <p>The profits of a Nigerian company are deemed to accrue in Nigeria wherever the profits arise. Every taxable person shall register with the relevant tax authority and obtain a Tax ID.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Non-Resident Company</p>
              <p>Income, profits or gains of a non-resident person accruing in or derived from Nigeria are chargeable to tax. Gains are taxable where they relate to a trade or business in Nigeria, any asset located in Nigeria, or any asset deemed to be located in Nigeria.</p>
            </div>
          </div>
        ),
      },
      {
        heading: 'Filing of Returns',
        content: (
          <div className="space-y-2 text-sm text-gray-600">
            <p>Every company shall file a self-assessment return with the Service in the prescribed form at least once a year:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Existing companies: not more than <strong>six (6) months</strong> after the end of its accounting year.</li>
              <li>Newly incorporated companies: within <strong>18 months</strong> from incorporation or <strong>6 months</strong> after the first accounting period, whichever is earlier.</li>
            </ul>
            <p className="mt-2">The return shall include: a completed self-assessment form, audited financial statements, evidence of tax payment, effective tax rate computation, and attestation by a principal officer.</p>
          </div>
        ),
      },
      {
        heading: 'Electronic Filing',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>Taxpayers are required to file returns electronically through the <strong>Self Tax Portal</strong> of the NRS:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Log in to the Self Tax Portal using your registered credentials.</li>
              <li>Download the relevant tax return forms for your tax type.</li>
              <li>Complete the forms accurately and upload them on the portal.</li>
              <li>Make payment through the approved electronic payment channels.</li>
            </ol>
          </div>
        ),
      },
      {
        heading: 'Manage & Track Your Taxes',
        content: (
          <div className="text-sm text-gray-600 space-y-1">
            <p>Through the Self-Tax Portal you can:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>View the status of all submitted tax returns in real time;</li>
              <li>Manage your tax obligations across different tax types;</li>
              <li>Access and review all your tax accounts in one place; and</li>
              <li>View and utilise your Withholding Tax credits seamlessly.</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Deadlines & Penalties',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Existing Companies:</strong> Returns must be filed within <strong>6 months</strong> after the end of the accounting year (e.g., 30 June where the year ends 31 December).</li>
              <li><strong>Newly Incorporated Companies:</strong> Within <strong>18 months</strong> from incorporation or <strong>6 months</strong> after the first accounting period, whichever is earlier.</li>
            </ul>
            <p>Failure to comply may result in penalties, interest charges, or other enforcement actions.</p>
          </div>
        ),
      },
      {
        heading: 'Dispute Resolution',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>Taxpayers who disagree with an assessment have the right to object or appeal within <strong>30 days</strong> from the date of service of the assessment or notice, clearly stating the grounds and supported by relevant documentation.</p>
            <p>A taxpayer may also seek redress through the <strong>Tax Ombud</strong> for unresolved issues, service-related complaints, or administrative grievances.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    title: 'Withholding Tax',
    intro:
      'Withholding Tax is an advance payment of income tax deducted at source from eligible transactions. It is withheld by the payer and remitted directly to the relevant tax authorities.',
    sections: [
      {
        heading: 'Persons Required to Deduct at Source',
        content: (
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            {[
              'A body, corporate or unincorporate, other than an individual;',
              'Government, Government Ministry, Department or Agency;',
              'A statutory body;',
              'A public authority;',
              'Any other institution, organization, establishment or enterprise including those exempt from tax; and',
              'A payment agent on behalf of any of the above persons.',
            ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ),
      },
      {
        heading: 'Time of Deduction',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>The obligation to deduct at source shall arise at the earlier of when <strong>payment is made</strong> or the <strong>amount due is otherwise settled</strong>.</p>
            <p>For payments between related parties, deduction shall be made at the time of payment or when the liability is recognised, whichever is earlier.</p>
            <p>The amount deducted on any payment to a <strong>non-resident person</strong> shall be the final tax, except where the income is liable to further tax by reason of a taxable presence in Nigeria.</p>
          </div>
        ),
      },
      {
        heading: 'Remittance of Amount Deducted',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>The amount deducted at source shall be remitted to the relevant tax authority as follows:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Nigeria Revenue Service:</strong> Not later than the <strong>21st day</strong> of the month following the month of payment.</li>
              <li><strong>State Internal Revenue Service — CGT & PAYE:</strong> Not later than the <strong>10th day</strong> of the month following payment.</li>
              <li><strong>State Internal Revenue Service — Other deductions:</strong> Not later than the <strong>30th day</strong> of the month following payment.</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Filing of Withholding Returns',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>Where an amount is deducted at source, the person making the deduction shall submit a return to the relevant tax authority with evidence of remittance. The submission shall include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and address of the deductee;</li>
              <li>Tax Identification Number, NIN, RC Number or equivalent;</li>
              <li>Nature of transaction;</li>
              <li>Gross amount paid or payable;</li>
              <li>Amount of tax deducted; and</li>
              <li>Calendar month to which the payment relates.</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Exemptions',
        content: (
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            {[
              'Compensating payments under a Registered Securities Lending Transaction;',
              'Distributions or dividend payments to a Real Estate Investment Trust or Company;',
              'Across-the-counter transactions as defined under Regulation 8 of WHT Regulations;',
              'Interest and fees paid to a Nigerian bank by direct debit of funds domiciled with the bank;',
              'Goods manufactured or materials produced by the person making the supply;',
              'Imported goods where the transaction does not create a taxable presence in Nigeria;',
              'Any payment in respect of income or profit exempt from tax;',
              'Out-of-pocket expenses normally incurred directly by the supplier and distinguishable from contract fees;',
              'Insurance premium;',
              'Supply of LPG, CNG, PMS, AGO, LPFO, DPK, and JET-A1;',
              'Commission retained by a broker from monies collected on behalf of the principal; and',
              'Winnings from a game of chance or reality show designed exclusively to promote entrepreneurship, academics, or scientific innovation.',
            ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ),
      },
      {
        heading: 'Offences',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>A person required to deduct at source who <strong>fails to do so</strong>, or having deducted <strong>fails to remit</strong> on or before the due date, is liable to a penalty under the relevant law.</p>
            <p>Where a person fails to deduct but has paid the amount to the recipient, only an <strong>administrative penalty and one-off annual interest</strong> on the amount not deducted shall be due.</p>
            <p>Where a person has deducted but <strong>failed to remit</strong>, the amount deducted plus an <strong>administrative penalty and annual interest</strong> shall be payable in line with applicable legislation.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 3,
    title: 'Value Added Tax',
    intro:
      'Value Added Tax (VAT) is a consumption tax levied on the value added to goods and services at each stage of production and distribution. In Nigeria, VAT is administered by the Nigeria Revenue Service (NRS) and applies to most goods and services supplied in the country, as well as to imports. The standard VAT rate is 7.5%. Certain goods and services are zero-rated or exempt, such as basic food items, medical and pharmaceutical products, and educational materials.',
    sections: [
      {
        heading: 'Eligibility to File',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>All businesses above the exemption threshold that supply taxable goods and services in Nigeria are required to register for VAT, charge VAT, and render a return on or before the <strong>21st day of the month</strong> following the transaction. This includes companies, partnerships, sole proprietors, and non-resident suppliers providing digital or physical goods/services to Nigerian customers.</p>
            <p className="bg-amber-50 border-l-4 border-amber-400 pl-3 py-2 rounded-r-lg text-amber-800"><strong>Exemption:</strong> Small companies are exempted from filing and paying VAT.</p>
          </div>
        ),
      },
      {
        heading: 'VAT Invoice',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>A taxable person who makes a taxable supply shall maintain sequential invoice numbering and furnish the purchaser with a VAT invoice containing:</p>
            <ul className="list-disc pl-5 space-y-1">
              {[
                "Supplier's Tax ID;",
                'An invoice number;',
                'Name and address of the supplier;',
                "Supplier's incorporation or business registration number;",
                'The date of supply;',
                'Name of purchaser or client;',
                'Gross amount of transaction; and',
                'VAT charged and the rate.',
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p>A VAT invoice shall be issued on supply whether or not payment is made at the time of supply.</p>
          </div>
        ),
      },
      {
        heading: 'Fiscalisation of Supplies',
        content: (
          <p className="text-sm text-gray-600">A taxable person making a taxable supply shall implement the fiscalisation system deployed by the Service in accordance with the Nigeria Tax Administration Act, 2025.</p>
        ),
      },
      {
        heading: 'Taxable Supply by Non-Residents',
        content: (
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>A non-resident person who makes taxable supplies to Nigeria shall register for tax and include VAT on its invoice for all taxable supplies.</li>
            <li>Where a non-resident is making taxable supplies from outside Nigeria, the Nigerian recipient shall <strong>withhold the VAT</strong> due on the supply and remit it to the Service.</li>
          </ul>
        ),
      },
      {
        heading: 'Computation of VAT Payable or Refundable',
        content: (
          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
            <li>Calculate <strong>output VAT</strong> (VAT collected on sales) and <strong>input VAT</strong> (VAT paid on purchases).</li>
            <li>Deduct input VAT from output VAT to determine VAT payable or refundable.</li>
            <li>File VAT returns and make payment online via the NRS portal or at designated banks.</li>
            <li>Retain all supporting invoices and records for audit purposes.</li>
          </ol>
        ),
      },
      {
        heading: 'Required Documents',
        content: (
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {[
              'VAT invoices for all sales and purchases;',
              'Monthly VAT return form (VAT 002);',
              'Proof of payment (if paid via bank); and',
              'Tax Identification Number (Tax ID).',
            ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ),
      },
      {
        heading: 'Zero-Rated & Exempt Goods/Services',
        content: (
          <div className="text-sm text-gray-600 space-y-1">
            <p>Some goods and services are zero-rated (0%) or exempt from VAT. Examples include:</p>
            <ul className="list-disc pl-5 space-y-1">
              {[
                'Basic food items (e.g., rice, beans, yam, bread);',
                'Medical and pharmaceutical products;',
                'Educational materials and services; and',
                'Exported goods and services.',
              ].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          </div>
        ),
      },
      {
        heading: 'Input VAT Recovery',
        content: (
          <div className="text-sm text-gray-600 space-y-1">
            <p>Registered businesses can recover input VAT paid on purchases and expenses related to their taxable supplies. Ensure all input VAT claims are supported by valid VAT invoices.</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Input VAT on capital expenditure and services is <strong>fully recoverable</strong> under the new regime.</li>
              <li>Input VAT on <strong>exempt supplies cannot be claimed</strong>.</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Deadlines & Penalties',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>VAT returns must be filed monthly, not later than the <strong>21st day of the month</strong> following the month of transaction. Common penalties include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>₦100,000</strong> for the first month of default; <strong>₦50,000</strong> for each subsequent month (late registration or filing).</li>
              <li>Interest on unpaid VAT at the prevailing rate.</li>
              <li>Additional penalties for false declarations or non-remittance.</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Disputes',
        content: (
          <div className="text-sm text-gray-600 space-y-2">
            <p>If you disagree with a VAT assessment or penalty, you may file an objection with the NRS within <strong>30 days</strong> of receiving the notice. Further appeals can be made to the <strong>Tax Appeal Tribunal</strong>.</p>
            <p>For complex issues, consult a tax professional or contact the NRS Helpdesk.</p>
          </div>
        ),
      },
    ],
  },
  { id: 4, title: 'Stamp Duties', intro: '', sections: [] },
  { id: 5, title: 'Surcharge', intro: '', sections: [] },
  { id: 6, title: 'Development Levy', intro: '', sections: [] },
]

const loopItems = [...taxItems, ...taxItems, ...taxItems]

export default function TaxCarousel() {
  const [selected, setSelected] = useState<TaxItem | null>(null)
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-10 bg-gradient-to-r from-primary-600 to-accent-600 overflow-hidden">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {loopItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(item)}
              className="flex-shrink-0 bg-white/15 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
            >
              {item.title}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-gray-100 flex-shrink-0">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-2">
                    Tax Service
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-gray-700 transition-colors ml-4 mt-1 flex-shrink-0"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto p-6 space-y-6">
                {selected.intro && (
                  <p className="text-gray-700 text-sm leading-relaxed border-l-4 border-primary-500 pl-4 bg-primary-50 py-3 rounded-r-lg">
                    {selected.intro}
                  </p>
                )}

                {selected.sections.length > 0 ? (
                  selected.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex-shrink-0" />
                        {section.heading}
                      </h3>
                      {section.content}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm italic">Content coming soon.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
