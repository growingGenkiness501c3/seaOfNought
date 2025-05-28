<script setup lang="ts">
// No script logic needed for static legal document
</script>

<template>
  <section id="wccScaffolding">
    <!-- Cover Page -->
    <div class="w-[8.5in] h-[11in] mx-auto p-[1.5in] text-center flex flex-col justify-center items-center print:block">
      <h1 class="text-4xl font-bold mb-6">Tort Claim Notice</h1>
      <p class="text-lg mb-2">To: Washington County Court</p>
      <p class="text-lg mb-2">123 E Main St, Hillsboro, OR 97123</p>
      <p class="text-lg mb-2">From: [Your Full Legal Name]</p>
      <p class="text-lg">Date of Submission: [Insert Date]</p>
    </div>

    <div class="page-break"></div>

    <!-- Glossary -->
    <div class="w-[8.5in] h-[11in] mx-auto p-[1in] print:block">
      <h2 class="text-2xl font-bold mb-4">Glossary of Terms</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Tort:</strong> A civil wrong causing harm or loss resulting in legal liability.</li>
        <li><strong>Claimant:</strong> The person filing the tort claim.</li>
        <li><strong>Respondent:</strong> The party against whom the claim is made.</li>
        <li><strong>Negligence:</strong> Failure to take proper care, resulting in damage or injury to another.</li>
      </ul>
    </div>

    <div class="page-break"></div>

    <!-- Tort Claim Body -->
    <div class="w-[8.5in] h-[11in] mx-auto p-[1in] print:block">
      <h2 class="text-2xl font-bold mb-4">Tort Claim Notice</h2>

      <p class="mb-4 indent-8">I, [Your Full Legal Name], residing at [Your Address], submit this tort claim notice in accordance with the Oregon Tort Claims Act, ORS 30.260 to 30.300.</p>

      <p class="mb-4 indent-8">This claim arises from an incident on [Date of Incident], at [Location], where [describe what happened, who was involved, and what damages occurred].</p>

      <p class="mb-4 indent-8">As a result of the incident, I suffered the following damages: [List damages in detail, such as medical expenses, property damage, lost wages, pain and suffering, etc.].</p>

      <p class="mb-4 indent-8">The responsible party is believed to be [name of agency or person], due to [explanation of negligence or wrongdoing].</p>

      <p class="mb-4 indent-8">Attached are relevant documents, photographs, and receipts supporting this claim.</p>

      <p class="mt-12">Respectfully,</p>
      <p class="mt-8">______________________________</p>
      <p>[Your Full Legal Name]</p>
    </div>

    <div class="page-break"></div>

    <!-- Appendix -->
    <div class="w-[8.5in] h-[11in] mx-auto p-[1in] print:block">
      <h2 class="text-2xl font-bold mb-4">Appendix</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li>Photographs of the incident scene</li>
        <li>Medical bills and records</li>
        <li>Repair estimates and receipts</li>
        <li>Witness statements (if any)</li>
        <li>Police or incident reports</li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
@media print {
  .page-break {
    page-break-after: always;
  }
}
</style>



<!-- PDF EXPORT INSTRUCTIONS -->
<!--
To create a PDF from this document:
1. In your browser, open the page rendering this component.
2. Press Ctrl+P (or Cmd+P on Mac) to open the print dialog.
3. Select "Save as PDF" as your destination.
4. Ensure margins are set to none or minimum, and background graphics are enabled.
5. Click Save.

Automated option:
Use html2pdf.js:
import html2pdf from 'html2pdf.js';

const element = document.getElementById('wccScaffolding');
html2pdf().from(element).save('tort-claim.pdf');

Ensure this runs after DOM has fully rendered.

You're all set! The document now includes instructions for both manual and automated PDF generation using html2pdf.js. Let me know if you'd like help wiring the export function into a button or Vue event.

--> 