// DATA HANDBOOK LENGKAP
    const HANDBOOK_DATA = [
      {
        category: "STRUKTUR",
        pages: [
          {
            id: "chain",
            title: "Chain of Command",
            subtitle: "Struktur hirarki kepemimpinan dan jenjang jabatan resmi LSPD.",
            icon: "★",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- High Command -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-amber-500 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-amber-400 uppercase text-sm tracking-wider">High Command</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono">HC</span>
                  </div>
                  <p class="text-xs text-slate-400">Pengambil keputusan tertinggi, perumus kebijakan SOP, dan penanggung jawab penuh departemen.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Chief of Police</strong> <span class="font-mono text-slate-400">COP</span></li>
                    <li class="pt-2 flex justify-between"><strong>Assistant Chief</strong> <span class="font-mono text-slate-400">ACOP</span></li>
                    <li class="pt-2 flex justify-between"><strong>Deputy Chief</strong> <span class="font-mono text-slate-400">DCOP</span></li>
                  </ul>
                </div>

                <!-- Command Staff -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-blue-500 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-blue-400 uppercase text-sm tracking-wider">Command Staff</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono">CS</span>
                  </div>
                  <p class="text-xs text-slate-400">Pengawas operasional harian, pimpinan divisi, dan manajemen perwira lapangan.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Commander</strong> <span class="font-mono text-slate-400">CMDR</span></li>
                    <li class="pt-2 flex justify-between"><strong>Captain</strong> <span class="font-mono text-slate-400">CPT</span></li>
                    <li class="pt-2 flex justify-between"><strong>Lieutenant</strong> <span class="font-mono text-slate-400">LT</span></li>
                  </ul>
                </div>

                <!-- Supervisory & Patrol -->
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-slate-400 space-y-3">
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold text-slate-300 uppercase text-sm tracking-wider">Supervisory & Field</h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 font-mono">FLD</span>
                  </div>
                  <p class="text-xs text-slate-400">Supervisor lapangan, detektif penindak hukum, serta elemen utama patroli rutin.</p>
                  <ul class="space-y-2 text-xs divide-y divide-slate-800">
                    <li class="pt-2 flex justify-between"><strong>Sergeant - III</strong> <span class="font-mono text-slate-400">SGT</span></li>
                    <li class="pt-2 flex justify-between"><strong>Police Officer III</strong> <span class="font-mono text-slate-400">PO III</span></li>
                    <li class="pt-2 flex justify-between"><strong>Police Officer II</strong> <span class="font-mono text-slate-400">PO II</span></li>
                    <li class="pt-2 flex justify-between"><strong>Police Officer I</strong> <span class="font-mono text-slate-400">PO I</span></li>
                    <li class="pt-2 flex justify-between"><strong>Cadet / Probationary</strong> <span class="font-mono text-slate-400">CDT</span></li>
                  </ul>
                </div>
              </div>

              <div class="glass-card p-5 rounded-xl border border-slate-800 mt-4 space-y-2">
                <h4 class="text-sm font-bold text-police-gold">Aturan Rantai Komando (Chain of Command Protocol)</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Setiap instruksi dan keluhan wajib disampaikan bertingkat dari bawahan ke atasan langsung. Meloncat hirarki (misal Cadet langsung menghubungi Chief tanpa melalui Sergeant/Lieutenant) merupakan pelanggaran disiplin berat kecuali dalam keadaan darurat ekstrim.
                </p>
              </div>
            `
          },
          {
            id: "divisions",
            title: "Divisi & Biro",
            subtitle: "Unit spesialisasi dan pembagian divisi kerja di lingkungan LSPD.",
            icon: "▣",
            content: `
              <!-- LSPD DIVISION HANDBOOK -->
              <div class="space-y-5">

                <!-- LSPD COMMAND -->
                <details class="glass-card rounded-xl overflow-hidden group" open>
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                        <i data-lucide="shield-check" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">LSPD Command</h3>
                        <p class="text-[11px] text-slate-400">Executive Leadership & Administration</p>
                        <p class="text-xs text-amber-400 mt-1">4 Divisions / Offices</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold font-mono text-sm">BOC</span>
                        <h4 class="font-bold text-white text-sm">Board of Commissioners</h4>
                        <p class="text-[11px] text-slate-400">Executive Oversight</p>
                        <p class="text-xs text-slate-300">Mengawasi kebijakan dan kinerja kepolisian, mengevaluasi kepemimpinan, serta memastikan departemen berjalan sesuai peraturan.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-red-500/10 text-red-400 font-bold font-mono text-sm">CO</span>
                        <h4 class="font-bold text-white text-sm">Chief's Office</h4>
                        <p class="text-[11px] text-slate-400">Department Leadership</p>
                        <p class="text-xs text-slate-300">Memimpin LSPD, menetapkan arahan strategis, mengesahkan kebijakan, dan mengambil keputusan penting bagi departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-blue-500/10 text-blue-400 font-bold font-mono text-sm">ASB</span>
                        <h4 class="font-bold text-white text-sm">Administrative Services Bureau</h4>
                        <p class="text-[11px] text-slate-400">Administrative Management</p>
                        <p class="text-xs text-slate-300">Mengelola dokumen resmi, pengarsipan, laporan internal, administrasi, dan data departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-teal-500/10 text-teal-400 font-bold font-mono text-sm">OO</span>
                        <h4 class="font-bold text-white text-sm">Office of Operations</h4>
                        <p class="text-[11px] text-slate-400">Operational Command</p>
                        <p class="text-xs text-slate-300">Mengatur kegiatan operasional harian, penugasan personel, koordinasi patroli, dan pelaksanaan operasi kepolisian.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- INVESTIGATION & INTELLIGENCE -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <i data-lucide="search" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Investigation &amp; Intelligence</h3>
                        <p class="text-[11px] text-slate-400">Criminal Investigation & Intelligence</p>
                        <p class="text-xs text-purple-400 mt-1">4 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-purple-500/10 text-purple-400 font-bold font-mono text-sm">CID</span>
                        <h4 class="font-bold text-white text-sm">Criminal Investigations Division</h4>
                        <p class="text-[11px] text-slate-400">Criminal Case Investigation</p>
                        <p class="text-xs text-slate-300">Menyelidiki tindak kriminal melalui pengumpulan bukti, pemeriksaan saksi, wawancara tersangka, dan penyusunan berkas perkara.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold font-mono text-sm">IB</span>
                        <h4 class="font-bold text-white text-sm">Investigations Bureau</h4>
                        <p class="text-[11px] text-slate-400">Investigative Coordination</p>
                        <p class="text-xs text-slate-300">Mengoordinasikan penyelidikan lintas unit, menangani kasus kompleks, dan menyatukan informasi investigasi.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-rose-500/10 text-rose-400 font-bold font-mono text-sm">GND</span>
                        <h4 class="font-bold text-white text-sm">Gang &amp; Narcotics Division</h4>
                        <p class="text-[11px] text-slate-400">Gang & Narcotics Enforcement</p>
                        <p class="text-xs text-slate-300">Menyelidiki aktivitas geng kriminal, peredaran narkotika, perang antargeng, dan jaringan kriminal terorganisasi.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-pink-500/10 text-pink-400 font-bold font-mono text-sm">IAD</span>
                        <h4 class="font-bold text-white text-sm">Internal Affairs Division</h4>
                        <p class="text-[11px] text-slate-400">Internal Investigations</p>
                        <p class="text-xs text-slate-300">Menyelidiki dugaan pelanggaran anggota, penyalahgunaan wewenang, korupsi, dan pelanggaran prosedur internal.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- FIELD OPERATIONS -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <i data-lucide="radio-tower" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Field Operations</h3>
                        <p class="text-[11px] text-slate-400">Patrol &amp; Tactical Operations</p>
                        <p class="text-xs text-emerald-400 mt-1">5 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold font-mono text-sm">PD</span>
                        <h4 class="font-bold text-white text-sm">Patrol Division</h4>
                        <p class="text-[11px] text-slate-400">Uniformed Patrol Operations</p>
                        <p class="text-xs text-slate-300">Menjalankan patroli rutin, merespons panggilan darurat, menjaga keamanan wilayah, menghentikan kendaraan, dan menegakkan hukum.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-neutral-500/10 text-neutral-300 font-bold font-mono text-sm">SWAT</span>
                        <h4 class="font-bold text-white text-sm">SWAT Division</h4>
                        <p class="text-[11px] text-slate-400">Special Weapons &amp; Tactics</p>
                        <p class="text-xs text-slate-300">Menangani situasi berisiko tinggi seperti penyanderaan, tersangka bersenjata, penangkapan berbahaya, dan operasi taktis khusus.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold font-mono text-sm">ASD</span>
                        <h4 class="font-bold text-white text-sm">Air Support Division</h4>
                        <p class="text-[11px] text-slate-400">Aerial Operations</p>
                        <p class="text-xs text-slate-300">Menyediakan dukungan udara untuk pengawasan, pencarian orang, pelacakan tersangka, dan bantuan pengejaran.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-lime-500/10 text-lime-400 font-bold font-mono text-sm">SHD</span>
                        <h4 class="font-bold text-white text-sm">Speed Hunter Division</h4>
                        <p class="text-[11px] text-slate-400">Traffic Enforcement &amp; Pursuit</p>
                        <p class="text-xs text-slate-300">Menindak balap liar, pelanggaran kecepatan, pengemudi berbahaya, dan mendukung pengejaran kendaraan sesuai SOP.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-yellow-500/10 text-yellow-400 font-bold font-mono text-sm">SOB</span>
                        <h4 class="font-bold text-white text-sm">Special Operations Bureau</h4>
                        <p class="text-[11px] text-slate-400">Specialized Operations</p>
                        <p class="text-xs text-slate-300">Merencanakan operasi khusus, mendukung operasi lintas divisi, dan menangani penugasan yang membutuhkan strategi khusus.</p>
                      </div>

                    </div>
                  </div>
                </details>

                <!-- PERSONNEL & SUPPORT -->
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="p-5 cursor-pointer list-none flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <div class="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                        <i data-lucide="users" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <h3 class="font-bold text-white">Personnel &amp; Support</h3>
                        <p class="text-[11px] text-slate-400">Human Resources &amp; Department Services</p>
                        <p class="text-xs text-orange-400 mt-1">5 Divisions / Bureaus</p>
                      </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"></i>
                  </summary>

                  <div class="px-5 pb-5 border-t border-white/10 pt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-green-500/10 text-green-400 font-bold font-mono text-sm">HRTD</span>
                        <h4 class="font-bold text-white text-sm">Human Resource &amp; Training Division</h4>
                        <p class="text-[11px] text-slate-400">Personnel &amp; Training</p>
                        <p class="text-xs text-slate-300">Mengelola perekrutan, data personel, pendidikan dasar, pelatihan lanjutan, dan evaluasi kemampuan anggota.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-orange-500/10 text-orange-400 font-bold font-mono text-sm">FLD</span>
                        <h4 class="font-bold text-white text-sm">Firearms Licensing Division</h4>
                        <p class="text-[11px] text-slate-400">Firearms Permit Administration</p>
                        <p class="text-xs text-slate-300">Memproses permohonan, verifikasi, perpanjangan, dan pencabutan izin senjata api sesuai peraturan.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 font-bold font-mono text-sm">MRD</span>
                        <h4 class="font-bold text-white text-sm">Media &amp; Relations Division</h4>
                        <p class="text-[11px] text-slate-400">Public Information &amp; Relations</p>
                        <p class="text-xs text-slate-300">Mengelola hubungan masyarakat, konferensi pers, publikasi resmi, dan komunikasi dengan media.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-slate-500/10 text-slate-300 font-bold font-mono text-sm">OSS</span>
                        <h4 class="font-bold text-white text-sm">Office of Support Services</h4>
                        <p class="text-[11px] text-slate-400">Logistics &amp; Department Support</p>
                        <p class="text-xs text-slate-300">Mengelola kendaraan dinas, perlengkapan, fasilitas, dan kebutuhan logistik operasional departemen.</p>
                      </div>

                      <div class="glass-card p-4 rounded-xl space-y-2">
                        <span class="inline-block p-2 rounded-lg bg-violet-500/10 text-violet-400 font-bold font-mono text-sm">PSB</span>
                        <h4 class="font-bold text-white text-sm">Professional Standards Bureau</h4>
                        <p class="text-[11px] text-slate-400">Professional Conduct &amp; Compliance</p>
                        <p class="text-xs text-slate-300">Mengawasi standar profesional, etika, kedisiplinan, kepatuhan terhadap SOP, dan kualitas pelayanan kepolisian.</p>
                      </div>

                    </div>
                  </div>
                </details>

              </div>

            `
          },
          {
            id: "callsigns",
            title: "Callsign System",
            subtitle: "Format dan standar pengidentifikasi unit patroli di radio.",
            icon: "◇",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4">
                <h3 class="font-bold text-white text-sm">Format Standar Callsign: <span class="font-mono text-police-gold">[PREFIX] - [UNIT NUMBER]</span></h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr class="border-b border-slate-800 text-slate-400 font-mono">
                        <th class="p-2">Prefix</th>
                        <th class="p-2">Jenis Unit</th>
                        <th class="p-2">Jumlah Petugas</th>
                        <th class="p-2">Contoh Callsign</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td class="p-2 font-mono font-bold text-red-400">STAFF (S)</td>
                        <td class="p-2">High Command</td>
                        <td class="p-2">2 Officers</td>
                        <td class="p-2 font-mono">7-STAFF-01</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-blue-400">ADAM (A)</td>
                        <td class="p-2">Patroli Mobil Standar</td>
                        <td class="p-2">2 Officers</td>
                        <td class="p-2 font-mono">71-ADAM-12</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-emerald-400">LINCOLN (L)</td>
                        <td class="p-2">Patroli Solo Officer</td>
                        <td class="p-2">1 Officer</td>
                        <td class="p-2 font-mono">71-LINCON-04</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-purple-400">MARY (M)</td>
                        <td class="p-2">Patroli Sepeda Motor</td>
                        <td class="p-2">1 Officer</td>
                        <td class="p-2 font-mono">71-MARY-01</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-red-400">DAVID (D)</td>
                        <td class="p-2">Unit SWAT / Tactical</td>
                        <td class="p-2">Tim SWAT</td>
                        <td class="p-2 font-mono">DAVID-1</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-amber-400">AIR</td>
                        <td class="p-2">Helikopter Support</td>
                        <td class="p-2">2 Aviators</td>
                        <td class="p-2 font-mono">AIR-1</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-slate-400">HENRY (H)</td>
                        <td class="p-2">Interceptor Unit</td>
                        <td class="p-2">1 Interceptor Unit</td>
                        <td class="p-2 font-mono">71-HENRY-10</td>
                      </tr>
                      <tr>
                        <td class="p-2 font-mono font-bold text-pink-400">GOLF (G)</td>
                        <td class="p-2">	Interceptor High Command</td>
                        <td class="p-2">1 	Interceptor High Command</td>
                        <td class="p-2 font-mono">71-GOLF-30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          }
        ]
      },
      {
        category: "KOMUNIKASI",
        pages: [
          {
            id: "ten-codes",
            title: "Ten Codes",
            subtitle: "Kode radio standar 10-XX untuk komunikasi cepat dan efisien.",
            icon: "×",
            content: `
 
<!-- LSPD RADIO TEN-CODES -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">

  
<!-- COMMUNICATION -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-1</span>
  <span class="text-white text-right">Meet me at / Temui saya di</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-2</span>
  <span class="text-white text-right">Good Signal / Sinyal Bagus</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-3</span>
  <span class="text-white text-right">Stop Transmitting / Kosongkan frekuensi</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-4</span>
  <span class="text-white text-right">Roger That / Acknowledged</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-7</span>
  <span class="text-white text-right">Out of Service / Off Duty (Sementara)</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-8</span>
  <span class="text-white text-right">In Service / Siap bertugas</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-9</span>
  <span class="text-white text-right">Repeat / Ulangi transmisi</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-10</span>
  <span class="text-white text-right">Fight in Progress / Keributan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-12</span>
  <span class="text-white text-right">Stand By / Bersiap</span>
</div>

<!-- EMERGENCY & MEDICAL -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-13A</span>
  <span class="text-white text-right">Officer Down! / Petugas Tertembak (Darurat)</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-13B</span>
  <span class="text-white text-right">Officer Down / Petugas Kecelakaan atau Pingsan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-14</span>
  <span class="text-white text-right">EMS Down / Petugas Medis Tumbang</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-18</span>
  <span class="text-white text-right">Quickly / Segera lakukan dengan cepat</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-20</span>
  <span class="text-white text-right">Location / Lokasi saat ini</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-22</span>
  <span class="text-white text-right">Cancel / Batalkan instruksi</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-23</span>
  <span class="text-white text-right">Arriving on Location / Tiba di TKP</span>
</div>

<!-- VEHICLE & SUSPECT INFORMATION -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-28</span>
  <span class="text-white text-right">Info Plate / Informasi plat nomor kendaraan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-29</span>
  <span class="text-white text-right">Checking Criminal Records / Cek catatan kriminal</span>
</div>

<!-- ROBBERIES & ARMED SUSPECTS -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-31A</span>
  <span class="text-white text-right">House Robbery / Perampokan Rumah</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-31B</span>
  <span class="text-white text-right">Store Robbery in Progress / Perampokan Toko Berlangsung</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-32</span>
  <span class="text-white text-right">Man with Firearms / Orang Bersenjata</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-34</span>
  <span class="text-white text-right">Suspicious Behaviour / Perilaku Mencurigakan (Narkotika)</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-37</span>
  <span class="text-white text-right">Suspicious Vehicle / Kendaraan Mencurigakan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-38</span>
  <span class="text-white text-right">High Risk Stop / Felony Stop</span>
</div>

<!-- DUTY STATUS -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-41</span>
  <span class="text-white text-right">On Duty / Masuk Dinas</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-42</span>
  <span class="text-white text-right">Off Duty / Keluar Dinas</span>
</div>

<!-- TRAFFIC & PUBLIC SAFETY -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-45</span>
  <span class="text-white text-right">Illegal Hunting / Perburuan Liar</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-47</span>
  <span class="text-white text-right">Injured Person / Korban Cedera</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-50</span>
  <span class="text-white text-right">Vehicle Accident / Tabrakan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-52</span>
  <span class="text-white text-right">EMS Needed / Butuh Medis Segera</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-55</span>
  <span class="text-white text-right">Traffic Stop / Pemberhentian Kendaraan Biasa</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-57</span>
  <span class="text-white text-right">Chase in Progress / Pengejaran Aktif</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-60</span>
  <span class="text-white text-right">Vehicle Description / Deskripsi Kendaraan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-61</span>
  <span class="text-white text-right">Subject Description / Deskripsi Subjek atau Orang</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-70</span>
  <span class="text-white text-right">Fire in Progress / Kebakaran</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-71</span>
  <span class="text-white text-right">Gang War / Shootout / Perang Geng atau Baku Tembak</span>
</div>

<!-- RADIO RESPONSE & BACKUP -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-74</span>
  <span class="text-white text-right">Negative / Tidak Setuju / Salah</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-76</span>
  <span class="text-white text-right">En Route / Dalam Perjalanan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-77</span>
  <span class="text-white text-right">Need Assistance / Bantuan Rutin (Non-Emergency)</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-78</span>
  <span class="text-white text-right">Need Assistance / Bantuan Darurat Segera (Emergency)</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-80</span>
  <span class="text-white text-right">Officer in Danger / Polisi dalam Bahaya, Tidak Dapat Merespons</span>
</div>

<!-- SPECIAL INCIDENTS -->
<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-89</span>
  <span class="text-white text-right">Bomb Threat / Ancaman Bom</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-90</span>
  <span class="text-white text-right">Bank/Jewel Robbery in Progress / Perampokan Bank atau Toko Perhiasan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-94</span>
  <span class="text-white text-right">Drag Racing / Balapan Liar</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-95</span>
  <span class="text-white text-right">Suspect in Custody / Tersangka Diamankan</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-97</span>
  <span class="text-white text-right">Unauthorized Access / Penyelusupan Tanpa Izin</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-98</span>
  <span class="text-white text-right">Jailbreak / Pelarian Penjara</span>
</div>

<div class="glass-card bg-gray-800 p-3 rounded-lg flex items-center justify-between gap-3 border-l-2 border-gray-600">
  <span class="font-bold text-white shrink-0">10-99</span>
  <span class="text-white text-right">Situation Concluded / Situasi Selesai dan Aman</span>
</div>

</div>

            `
          },
          {
            id: "response",
            title: "Response Codes",
            subtitle: "Tingkat urgensi respon patroli menuju lokasi kejadian.",
            icon: "◎",
            content: `
              
<div class="glass-card p-5 rounded-xl border-l-4 border-l-red-700">
  <div class="flex items-center justify-between mb-2">
    <h3 class="font-bold text-red-500 font-mono text-sm">CODE 0</h3>
    <span class="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-400">ALL UNITS EMERGENCY</span>
  </div>
  <p class="text-xs text-slate-300">Critical emergency situation requiring the immediate response and deployment of all available police units. All units must respond and follow Command Staff instructions.</p>
</div>

<div class="space-y-4">
  <div class="glass-card p-5 rounded-xl border-l-4 border-l-slate-400">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-bold text-slate-200 font-mono text-sm">CODE 1</h3>
      <span class="text-[10px] px-2 py-0.5 rounded bg-slate-500/20 text-slate-300">Low Priority</span>
    </div>
    <p class="text-xs text-slate-300">Non-emergency response. Routine patrol, no siren or emergency lights. Officers must obey all traffic signs and regulations.</p>
  </div>

  <div class="glass-card p-5 rounded-xl border-l-4 border-l-amber-500">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-bold text-amber-400 font-mono text-sm">CODE 2</h3>
      <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Medium Priority</span>
    </div>
    <p class="text-xs text-slate-300">Light emergency response. Emergency lights ON, siren OFF (Silent Approach). Officers must proceed with caution.</p>
  </div>

  <div class="glass-card p-5 rounded-xl border-l-4 border-l-red-500">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-bold text-red-400 font-mono text-sm">CODE 3</h3>
      <span class="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300">HIGH EMERGENCY</span>
    </div>
    <p class="text-xs text-slate-300">Full emergency response. Emergency lights and siren ON. Priority response for critical emergencies, while maintaining public safety.</p>
  </div>

  <div class="glass-card p-5 rounded-xl border-l-4 border-l-emerald-500">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-bold text-emerald-400 font-mono text-sm">CODE 4</h3>
      <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Clear / Under Control</span>
    </div>
    <p class="text-xs text-slate-300">Situation at the scene is safe and under control. Additional backup units responding to the location may cancel their response and return to regular patrol.</p>
  </div>

  <div class="glass-card p-5 rounded-xl border-l-4 border-l-blue-500">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-bold text-blue-400 font-mono text-sm">CODE 6</h3>
      <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">Investigation</span>
    </div>
    <p class="text-xs text-slate-300">Out of Vehicle. Officer exits the patrol vehicle to conduct an investigation at the scene.</p>
  </div>
</div>
            `
          },
          {
            id: "priority",
            title: "Priority & Threat Level",
            subtitle: "Tingkat ancaman keamanan kota dan protokol pertahanan.",
            icon: "△",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-emerald-500 space-y-2">
                  <div class="font-mono font-bold text-emerald-400 text-sm">GREEN - LOW THREAT</div>
                  <p class="text-xs text-slate-300">Kondisi kota kondusif. Patroli rutin biasa berjalan normal. Cadet diizinkan patroli dengan pendampingan Standard Officer.</p>
                </div>
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-amber-500 space-y-2">
                  <div class="font-mono font-bold text-amber-400 text-sm">AMBER - ELEVATED</div>
                  <p class="text-xs text-slate-300">Peningkatan kriminalitas sedang/perampokan bank aktif. Officer diimbau membawa vest anti-peluru dan senjata jarak menengah.</p>
                </div>
                <div class="glass-card p-5 rounded-xl border-t-4 border-t-red-600 space-y-2">
                  <div class="font-mono font-bold text-red-500 text-sm">RED - HIGH THREAT / LOCKDOWN</div>
                  <p class="text-xs text-slate-300">Ancaman terorisme/penembakan beruntun/geng perang terbuka. Seluruh unit wajib bergabung dalam patroli Adam (min 2 orang per car) & SWAT siaga penuh.</p>
                </div>
              </div>
            `
          },
          {
            id: "radio",
            title: "Radio Abbreviations",
            subtitle: "Singkatan frase populer yang dipakai dalam komunikasi radio.",
            icon: "≡",
            content: `
             <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">

    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">ALS:</b> Advanced Life Support</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">ASAP:</b> As Soon As Possible</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">BLS:</b> Basic Life Support</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">BOLO:</b> Be On the Lookout</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">DOA:</b> Dead on Arrival</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">DOB:</b> Date of Birth</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">DOC:</b> Department of Corrections</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">DOJ:</b> Department of Justice</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">EMS:</b> Emergency Medical Services</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">ETA:</b> Estimated Time of Arrival</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">FTO:</b> Field Training Officer</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GOA:</b> Gone on Arrival</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GOV:</b> Government</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GSW:</b> Gunshot Wound</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">GSR:</b> Gunshot Residue</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">IC:</b> Incident Commander</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">LEO:</b> Law Enforcement Officer</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">MDT:</b> Mobile Data Terminal</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">PIT:</b> Pursuit Intervention Technique</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">POV:</b> Privately Owned Vehicle</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">RO:</b> Reporting Officer</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">SO:</b> Suspect / Offender</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">SOS:</b> Shoot on Sight</div>
    <div class="glass-card p-3 rounded-lg"><b class="text-police-accent">VCB:</b> Visual Contact Broken</div>

</div>
              </div>
            `
          },
          {
            id: "radio-use",
            title: "Penggunaan Radio",
            subtitle: "Behave radio yang harus dilakukan saat melakukan patrol dan merespon situasi.",
            icon: "📻",
            content: `
   <div class="space-y-4">

      <!-- MEMULAI PATROLI -->
      <div class="glass-card p-5 rounded-xl space-y-4">
        <h3 class="font-bold text-white text-sm">Memulai Patroli</h3>

        <div class="bg-black/40 border border-slate-700 rounded-lg p-3 text-xs text-slate-300 leading-relaxed font-mono">
          Dispatch this is (Station)-(Callsign)-(Badge number) will be doing 10-8 in Principal Area. Standby for any update.
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold">EN</span>
          <p>Dispatch this is 71-ADAM-111 will be doing 10-8 in Principal Area. Standby for any update.</p>
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md text-xs font-bold">ID</span>
          <p>Dispatch 71-ADAM-111 melakukan 10-8 di daerah Principal. Siap untuk situasi apa pun.</p>
        </div>
      </div>

      <!-- MERESPONS SITUASI -->
      <div class="glass-card p-5 rounded-xl space-y-4">
        <h3 class="font-bold text-white text-sm">Responding Situasi</h3>

        <div class="bg-black/40 border border-slate-700 rounded-lg p-3 text-xs text-slate-300 leading-relaxed font-mono">
          Dispatch this is (Station)-(Callsign)-(Badge) will be Responding for last (situasi) at (lokasi), standby for future update.
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold">EN</span>
          <p>Dispatch this is 71-ADAM-111 will be Responding for last 31B at Strawberry Ave. Standby for future update.</p>
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md text-xs font-bold">ID</span>
          <p>Dispatch 71-ADAM-111 akan merespons laporan 31B di Strawberry Ave. Mohon tunggu untuk laporan selanjutnya.</p>
        </div>
      </div>

      <!-- RADIO DI LOKASI SITUASI -->
      <div class="glass-card p-5 rounded-xl space-y-4">
        <h3 class="font-bold text-white text-sm">Radio di Lokasi Situasi</h3>

        <div class="bg-black/40 border border-slate-700 rounded-lg p-3 text-xs text-slate-300 leading-relaxed font-mono">
          For the last situation (situasi) at (lokasi) we got Active (situasi) and hostage situation, there is possible (X) SUSPECT inside with (Y) HOSTAGE, for 60 is (mobil) with (warna), for plate number is (plate). Need 78, for unit available.
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold">EN</span>
          <p>For the last situation 31B at Strawberry we got Active store robbery and hostage situation, there is possible 2 SUSPECT inside with 1 HOSTAGE, for 60 is Sunrise with Red Color, for plate number is LA 4444. Need 78, for unit available.</p>
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md text-xs font-bold">ID</span>
          <p>Untuk situasi 31B terakhir di Strawberry Ave, telah terjadi perampokan toko dan penyanderaan. Terdapat 2 suspect dan 1 sandera. Untuk 60 yaitu mobil Sunrise berwarna merah dengan plate LA 4444. Membutuhkan 78 untuk unit yang tersedia.</p>
        </div>
      </div>

      <!-- SITUASI SELESAI -->
      <div class="glass-card p-5 rounded-xl space-y-4">
        <h3 class="font-bold text-white text-sm">Situasi Selesai / Clear</h3>

        <div class="bg-black/40 border border-slate-700 rounded-lg p-3 text-xs text-slate-300 leading-relaxed font-mono">
          For the last situation (situasi) at (lokasi), already Code 4, [Suspect VCB jika terjadi], all 95 is detained and escorting to (Station). Thank you for assisting all deputy/officer and back to patrol.
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold">EN</span>
          <p>For the last situation 31B at Chumash, already Code 4, all 95 is detained and escorting to MRPD Station. Thank you for assisting all deputy/officer and back to patrol.</p>
        </div>

        <div class="flex gap-3 items-start text-sm text-slate-400">
          <span class="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md text-xs font-bold">ID</span>
          <p>Untuk situasi 31B terakhir di Chumash, telah Code 4. Semua 95 telah ditahan dan dibawa menuju MRPD Station. Terima kasih semua deputy/officer yang telah membantu, dan bisa kembali patroli.</p>
        </div>
   
              </div>
            `
          }
        ]
      },
      {
        category: "PROSEDUR",
        pages: [
          {
            id: "arrest",
            title: "Prosedur Penangkapan",
            subtitle: "Langkah baku pengamanan tersangka di lapangan (Arrest Protocol).",
            icon: "ⓘ",
            content: `
              <div class="space-y-4 text-xs">
                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">1</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pemberhentian & Penjinakan Threat</h4>
                    <p class="text-slate-300">Perintahkan tersangka untuk tiarap / angkat tangan (Verbal Command). Jika melawan, gunakan Taser / Less-Lethal force terlebih dahulu.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">2</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pengendalian & Pengborgolan (Cuffing)</h4>
                    <p class="text-slate-300">Pasang borgol dari belakang posisi tersangka. Pastikan posisi aman dari kemungkinan tersangka menarik senjata tersembunyi.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">3</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Penggeledahan Badan (Pat Down / Search)</h4>
                    <p class="text-slate-300">Geledah saku, pakaian, dan tas tersangka. Amankan barang bukti kejahatan dan senjata berbahaya. Catat barang yang disita.</p>
                  </div>
                </div>

                <div class="glass-card p-4 rounded-xl flex gap-4 items-start">
                  <div class="w-7 h-7 rounded-full bg-police-blue flex items-center justify-center font-bold text-white font-mono shrink-0">4</div>
                  <div>
                    <h4 class="font-bold text-white mb-1">Pembacaan Hak Miranda (Miranda Rights)</h4>
                    <p class="text-slate-300">Wajib membacakan Hak Miranda setelah tersangka diborgol dan sebelum pemeriksaan resmi diajukan.</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "suspect",
            title: "Memproses Suspect",
            subtitle: "Prosedur booking tersangka di Station Mission Row.",
            icon: "②",
            content: `
    
<div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
  <h3 class="font-bold text-white text-sm">Alur Pemrosesan Suspect di Kantor Polisi:</h3>

  <ol class="list-decimal pl-5 space-y-2">

    <li>
      Saat sampai di station, bawa suspect ke Sel Tahanan/Ward. Jika banyak suspect, letakkan di tempat yang luas di station.
    </li>

    <li>
      Jika suspect pingsan, panggil EMS dan lakukan prosedur BLS, serta cek GSR Test.
    </li>

    <li>
      Saat suspect pingsan, foto barang bawaan suspect terlebih dahulu (pastikan pas) dan foto GSR Test-nya.
    </li>

    <li>
      Setelah dibangunkan EMS, biarkan suspect membayar biaya pengobatan, lalu borgol dan bacakan Miranda Rights (jangan terlalu lama).
    </li>

    <li>
      Geledah barang bawaan suspect (badan dan tas), lalu foto sebagai bukti untuk dimasukkan ke MDT.
    </li>

    <li>
      Sita semua barang ilegal: Senjata, Narkoba, Uang Merah, dan barang ilegal lainnya.
    </li>

    <li>
      Setelah disita, lepas borgol dan minta suspect melepas topi, kacamata, atau masker yang menutupi wajah.
    </li>

    <li>
      Minta ID Card suspect lalu foto. Jika tidak punya ID, lakukan Fingerprint, kemudian berikan papan mugshot dan foto.
    </li>

    <li>
      <b>Fingerprint:</b> Bawa suspect ke meja fingerprint, lalu masukkan nomor kantong. Jika layar mengeluarkan kode, copy dan foto kode tersebut.
    </li>

    <li>
      Buka MDT → menu <b>Profile</b>, lalu masukkan kode tadi di kolom pencarian. Akan muncul pemilik asli kode tersebut.
    </li>

    <li>
      Masuk ke menu <b>Incident</b>, cari insiden yang sedang kamu tangani. Pilih tanda <b>+</b> di kolom <b>Criminal</b>, lalu masukkan nama suspect.
    </li>

    <li>
      Masukkan <b>Penal Code</b> di bagian <b>Handle Charge</b> sesuai arahan IC.
    </li>

    <li>
      Setelah semua charge masuk, bacakan kepada suspect: Penal Code, jumlah denda, dan masa tahanannya.
    </li>

    <li>
      Tanyakan apakah suspect memilih <b>Plead Guilty</b> atau tidak. Jika tidak, suspect dapat memanggil pengacara untuk melanjutkan ke persidangan.
    </li>

    <li>
      Jika memilih <b>Plead Guilty</b>, kirim denda melalui <b>Send Fine</b> (kanan bawah), lalu centang <b>Processed & Plead Guilty</b>.
    </li>

    <li>
      Pembayaran denda juga bisa melalui tablet (F1) → <b>Billing</b>. Masukkan nomor kantong dan nominal denda sesuai MDT. Pembayaran wajib melalui <b>Bank</b>, bukan Cash.
    </li>

    <li>
      Cek pembayaran melalui <b>Billing → History</b>. Jika belum dibayar, gunakan fitur <b>Force Pay</b> dari history bill suspect.
    </li>

    <li>
      Panggil <b>DOC Central</b> atau <b>DOC Lokal</b> untuk membawa suspect ke Penjara.
    </li>

    <li>
      Jika suspect mendapatkan <b>Court Verdict</b>, panggil DOC Central untuk melakukan escort. Jika tidak ada DOC Central, lakukan perintah <b>/jail 99999</b>.
    </li>

  </ol>
</div>

            `
          },
          {
            id: "mdt",
            title: "Penggunaan MDT",
            subtitle: "Panduan pengoperasian Mobile Data Terminal kepolisian.",
            icon: "▤",
            content: `

<div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
  <h3 class="font-bold text-white text-sm">Fungsi Utama MDT & Aturan Pemrosesan:</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Citizen Search:</b>
      Memeriksa lisensi mengemudi, lisensi Senjata, riwayat kriminalitas pasif, dan status buronan (Warrant).
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Vehicle Database:</b>
      Pengecekan plat nomor kendaraan, pemilik sah, dan laporan pencurian (Stolen Vehicle).
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Create Incident Report:</b>
      Dokumentasi laporan perkara TKP, nama officer bertugas, serta daftar barang bukti.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Issue Warrant:</b>
      Mengajukan surat perintah penangkapan buronan atas persetujuan Detective / High Command.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Warrant Status:</b>
      Aktifkan bagian Warrant jika terdapat suspect yang sedang dicari atau berstatus buronan.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Penal Code / Charge:</b>
      Charge hanya digunakan 1 kali. Jika terdapat 2 senjata dengan jenis yang sama, jumlahnya dapat ditumpuk menjadi 2x.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Processed & Plead Guilty:</b>
      Aktifkan keduanya jika suspect telah selesai diproses, mengakui kesalahan (Plead Guilty), dan sudah membayar denda.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Processed Only:</b>
      Aktifkan Processed saja tanpa mengaktifkan Plead Guilty jika suspect terkena charge yang mengharuskannya dibawa ke pengadilan.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Pembacaan Denda:</b>
      Denda wajib dibacakan secara lengkap menggunakan angka dan terbilang. Contoh: $24.562 (dua puluh empat ribu lima ratus enam puluh dua dolar). Denda tidak boleh kurang dari nominal yang diterima.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Pembacaan Masa Tahanan:</b>
      Masa tahanan wajib dibacakan kepada suspect. Contoh: 90 bulan, dapat berubah sesuai pengurangan berdasarkan arahan IC.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">MDT Jail:</b>
      Jika tidak ada DOC yang tersedia, suspect dapat langsung dikirim melalui fitur Jail di MDT sesuai prosedur yang berlaku.
    </div>

    <div class="p-3 bg-dark-900/80 rounded-lg border border-slate-800">
      <b class="text-police-gold">Manual Jail:</b>
      Jika DOC tidak tersedia dan pengiriman melalui MDT tidak dapat dilakukan, gunakan perintah <b>/jail</b> sesuai ketentuan IC.
    </div>

  </div>
</div>

            `
          },
          {
            id: "impound",
            title: "Impound Kendaraan",
            subtitle: "Aturan penyitaan kendaraan ilegal atau tidak layak jalan.",
            icon: "♧",
            content: `

<!-- IMPOUND POLICE / IMPOUND SITA -->
<div class="space-y-3 text-xs text-slate-300">

  <h3 class="font-bold text-white text-sm">
    Impound Police / Impound Sita
  </h3>

  <ol class="space-y-2 list-none">

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">1</span>
      <p>Impound sita dilakukan jika kendaraan suspect berada di lokasi sebuah kasus.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">2</span>
      <p>Bisa digunakan jika mobil suspect masuk ke dalam air.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">3</span>
      <p>Bisa digunakan jika mobil suspect dibiarkan dan suspect kabur menggunakan kendaraan lain (changing vehicle saat pengejaran).</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">4</span>
      <p>Kendaraan yang boleh di-Impound Sita harus mendapatkan persetujuan IC terlebih dahulu.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">5</span>
      <p>Check identitas kendaraan: <b>F1 → Police Interaction → Next Page → Checking Vehicle.</b></p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">6</span>
      <p>Foto menggunakan mata satu dan ambil deskripsi kendaraan tersebut.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">7</span>
      <p>Check MDT mengenai kendaraan dan pemiliknya untuk memastikan identitas serta informasi kendaraan.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">8</span>
      <p>Check Trunk dan Glove Box menggunakan mata satu, lalu foto seluruh hasil pemeriksaan sebagai evidence.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">9</span>
      <p>Foto kendaraan dengan memperlihatkan seluruh bagian kendaraan serta plate number-nya secara jelas.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">10</span>
      <p>Jika ditemukan barang ilegal, ambil barang tersebut menggunakan sarung tangan.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">11</span>
      <p>Jika sudah clear, lakukan Impound Sita melalui: <b>F1 → Police Interaction → Next Page → Impound Sita.</b> Tulis laporan di Threads dan MDT, terutama jika terdapat tampering.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">12</span>
      <p>Masukkan semua evidence ke Threads di Website Putih bagian <b>Impound Police</b>, sertakan nomor MDT.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">13</span>
      <p>Tulis semua deskripsi kendaraan dan kasus secara lengkap, serta tampilkan seluruh foto evidence sebagai bukti pendukung.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">14</span>
      <p>Jika terjadi perampokan atau aktivitas ilegal dan suspect berhasil tertangkap, kendaraan <b class="text-police-gold">TIDAK menggunakan Impound Police</b>, melainkan menggunakan <b class="text-police-gold">IMPOUND VEHICLE PUBLIC</b>.</p>
    </li>

  </ol>
</div>
            `
          },
          {
            id: "miranda",
            title: "BLS & Miranda Rights",
            subtitle: "Pertolongan pertama dan pembacaan hak konstitusi tersangka.",
            icon: "✚",
            content: `

<!-- BLS & MIRANDA RIGHT -->
<div class="space-y-4 text-xs text-slate-300">

  <!-- JUDUL PROSEDUR -->
  <div class="flex items-center gap-3 mb-4">
    <div class="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-green-400">
      ✚
    </div>
    <div>
      <span class="text-[10px] text-slate-500 font-bold tracking-wider">PROSEDUR</span>
      <h2 class="font-bold text-white text-lg">BLS & Miranda Right</h2>
    </div>
  </div>

  <div class="border-b border-slate-800 mb-4"></div>

  <!-- PROSEDUR BLS -->
  <h3 class="font-bold text-white text-sm">Prosedur BLS</h3>

  <ol class="space-y-2 list-none">

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">1</span>
      <p>Amankan Suspect/Deputy yang terluka ke tempat aman.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">2</span>
      <p>Lakukan pertolongan pertama dengan CPR (emote CPR). Utamakan Deputy/Officer terlebih dahulu.</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">3</span>
      <p>Berikan tanda saat melakukan BLS (/me Melakukan BLS / Applying BLS).</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">4</span>
      <p>Setelah BLS diberikan (/do BLS diberikan / BLS Applied).</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">5</span>
      <p>Hubungi EMS dari lokasi terdekat (Alta / Roxwood Hospital).</p>
    </li>

    <li class="glass-card p-3 rounded-lg flex gap-3 items-start">
      <span class="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-bold shrink-0">6</span>
      <p>Beritahu EMS bahwa telah melakukan BLS.</p>
    </li>

  </ol>

  <!-- MIRANDA RIGHT ENGLISH -->
  <div class="glass-card p-4 rounded-lg border-l-2 border-green-400 space-y-2">
    <h3 class="font-bold text-green-400 text-xs">
      MIRANDA RIGHT (ENGLISH)
    </h3>

    <p class="italic text-slate-200 leading-relaxed">
      "You have the right to remain silent, anything you say can and will be used against you in the court of law. You have the right to an attorney. If you cannot afford one, one will be provided to you. Do you understand?"
    </p>
  </div>

  <!-- MIRANDA RIGHT INDONESIA -->
  <div class="glass-card p-4 rounded-lg border-l-2 border-green-400 space-y-2">
    <h3 class="font-bold text-green-400 text-xs">
      MIRANDA RIGHT (INDONESIA)
    </h3>

    <p class="italic text-slate-200 leading-relaxed">
      "Anda berhak untuk diam, apapun yang anda katakan dapat melawan anda di pengadilan. Anda berhak memanggil seorang pengacara, jika tidak ada maka negara yang akan memberikannya untuk anda. Apakah anda mengerti?"
    </p>
  </div>

</div>
            `
          },
          {
            id: "conduct",
            title: "Peraturan Internal",
            subtitle: "Kode etik dan standar perilaku anggota kepolisian LSPD.",
            icon: "⌁",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Larangan Keras (Zero Tolerance):</h3>
                <ul class="list-disc pl-5 space-y-2 text-red-300">
                  <li>Dilarang keras menyalahgunakan kewenangan atau menerima suap (Korupsi).</li>
                  <li>Dilarang menggunakan fasilitas/senjata dinas di luar jam tugas resmi.</li>
                  <li>Dilarang membocorkan rahasia data MDT / identitas perwira undercover kepada pihak sipil/kriminal.</li>
                  <li>Dilarang bersikap tidak sopan atau kasar secara berlebihan tanpa alasan RP yang valid.</li>
                </ul>
              </div>
            `
          }
        ]
      },
      {
        category: "HUKUM & PERLENGKAPAN",
        pages: [
          {
            id: "penal",
            title: "Penal Code",
            subtitle: "Daftar ringkas pasal kitab undang-undang pidana kota.",
            icon: "§",
            content: `
 <!-- LSPD TMRP Penal Code Table -->
<div class="glass-card p-5 rounded-xl space-y-4">
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse">
      <thead>
        <tr class="border-b border-slate-800 text-slate-400 font-mono">
          <th class="p-2">Kode Pasal</th>
          <th class="p-2">Nama Pelanggaran / Kejahatan</th>
          <th class="p-2">Denda ($)</th>
          <th class="p-2">Hukuman Penjara</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-800/60 font-mono">

        <!-- CATEGORY 0: STATE / NATIONAL SECURITY -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-purple-400">
            State / National Security
          </td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Treason</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Memerangi negara atau membantu musuh negara.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sedition</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Menghasut atau berpartisipasi meruntuhkan otoritas negara.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Rebellion &amp; Insurrection</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Pemberontakan bersenjata untuk merebut fasilitas atau kekuasaan.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sabotage of State Functions</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Merusak atau menghambat infrastruktur maupun sistem darurat negara.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Unlawful Impersonation of State Authority</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Mengaku sebagai pejabat, hakim, atau aparat negara secara ilegal.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Espionage</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Mengirimkan informasi keamanan negara kepada pihak musuh.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Terrorism</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Aksi membahayakan nyawa atau publik untuk mengintimidasi pemerintah.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Domestic Terrorism</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Aksi terorisme yang terjadi dalam skala dan wilayah domestik.
            </div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">
              Court Verdict / Special Sentence
            </span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-purple-400 font-bold whitespace-nowrap">(0)09</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Complicity of State Enemies</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">
              Memberikan dukungan material atau bantuan kepada musuh negara.
            </div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$350,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>

         <!-- CATEGORY 1: CRIMES AGAINST PERSONS -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-red-400">Crimes Against Persons</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Criminal Threats</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengancam kekerasan hingga menimbulkan rasa takut.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Assault</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengancam atau mencoba melakukan kekerasan fisik tanpa kontak.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">12 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Assault on a Government Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penyerangan tanpa kontak terhadap pegawai pemerintah yang bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$35,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Assault with Deadly Weapon</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penyerangan menggunakan senjata mematikan (senpi/senjam).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$28,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">22 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Assault on Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penyerangan memakai senjata mematikan pada petugas pemerintah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$43,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Domestic Violence</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kekerasan terhadap pasangan, anggota keluarga, atau teman serumah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$32,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Battery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak fisik ilegal yang menyebabkan cedera ringan/sentuhan ofensif.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$35,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">16 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Battery on a Government Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak fisik sengaja/penganiayaan pada pegawai pemerintah yang bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$65,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)09</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Battery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penganiayaan yang menyebabkan cedera berat atau menggunakan senjata.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$50,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)10</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Gang Related Shooting</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Penembakan ke orang/kendaraan terkait aktivitas geng.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$30,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)11</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Attempted Second Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Percobaan pembunuhan tanpa perencanaan terlebih dahulu.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$59,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">45 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)12</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Attempted First Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Percobaan pembunuhan yang direncanakan matang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$85,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>
                <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)13</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Attempted Murder of Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Percobaan pembunuhan terhadap pegawai pemerintah saat bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$160,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">80 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)14</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Third Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan tak sengaja akibat tindakan ceroboh atau berbahaya.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$180,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">150 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)15</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Second Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan sengaja tanpa perencanaan sebelumnya.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$200,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">470 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)16</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">First Degree Murder</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan berencana dengan niat jahat.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)17</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Murder of a Government Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan terhadap pegawai pemerintah yang sedang bertugas.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)18</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Serial Homicide</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembunuhan berantai terhadap dua orang atau lebih.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)19</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Mayhem</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melukai, memutilasi, atau merusak anggota tubuh seseorang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$60,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">85 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)20</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Mayhem</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melakukan mayhem dengan niat membuat cacat permanen.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)21</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Torture</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengakibatkan rasa sakit atau penderitaan ekstrem untuk menyiksa.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
                <!-- CRIMES AGAINST PERSONS: CONTINUED -->
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)22</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Unlawful Imprisonment</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengurung atau membatasi kebebasan seseorang tanpa wewenang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$3,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)23</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Unlawful Detention</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menahan seseorang dengan ancaman atau paksaan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)24</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostages</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera 1 atau 2 orang untuk menuntut sesuatu atau melarikan diri.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)25</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Hostages</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera 3 orang atau lebih.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)26</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostage Taking of Gov Employee (Cat 1)</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera pejabat tinggi negara (Kategori 1).</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)27</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostage Taking of Gov Employee (Cat 2)</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera pejabat eksekutif (Kategori 2).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$320,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">100 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)28</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Hostage Taking of Gov Employee (Cat 3)</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera petugas operasional pemerintah (Kategori 3).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$100,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">80 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)29</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Hostage Taking of Gov Employees</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera 4 atau lebih pegawai pemerintah atau dalam kondisi terancam nyawa.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)30</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Kidnapping</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menculik atau membawa lari seseorang tanpa persetujuan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">14 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)31</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Kidnapping of a Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menculik pegawai pemerintah saat bertugas.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$45,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)32</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Battery of a Gov Employee</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak kasar yang menyebabkan luka parah atau melibatkan senjata pada pegawai pemerintah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$90,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">45 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-red-400 font-bold whitespace-nowrap">(1)33</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Aggravated Hostage Taking - Medical Endangerment</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyandera sambil menghalangi pertolongan medis dalam kondisi krisis.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$120,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">90 Bulan</td>
        </tr>

        <!-- CATEGORY 2: SEXUAL OFFENSES & CHILD PROTECTION -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-pink-400">Sexual Offenses &amp; Child Protection</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Stalking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menguntit atau mengganggu orang lain secara berulang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$2,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Harassment</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melakukan intimidasi atau tindakan mengganggu secara berulang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sexual Assault</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Kontak seksual tanpa persetujuan melalui ancaman atau paksaan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$30,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sexual Battery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menggunakan kekerasan untuk melakukan kontak seksual.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$50,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Indecent Exposure</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mempertontonkan alat kelamin di tempat umum.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$2,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Lewd or Dissolute Conduct</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Berperilaku tidak senonoh atau cabul di depan umum.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$8,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Prostitution</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menawarkan atau melakukan jasa seksual untuk imbalan uang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$60,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">65 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Pandering/Pimping</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menjadi mucikari atau mengontrol keuntungan prostitusi orang lain.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict</td>
        </tr>
                <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)09</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Rape</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Hubungan seksual paksa tanpa persetujuan/kekerasan.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)10</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Statutory Rape</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Hubungan seksual dengan anak di bawah umur.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)11</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Human Trafficking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Perdagangan manusia untuk eksploitasi kerja/seksual.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)12</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Forced Coercion</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memaksa kerja/tindakan seksual lewat ancaman atau wewenang.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)13</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Minor Alcohol / Tobacco Violation</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Anak di bawah umur mengonsumsi/memegang alkohol atau rokok.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)14</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Minor Pornography Violation</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Anak di bawah umur memiliki/membuat konten pornografi.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)15</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sale of Pornography to a Minor</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menjual/menyebarkan konten pornografi kepada anak di bawah umur.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)16</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Sale of Alcohol/Tobacco to a Minor</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menjual alkohol/rokok kepada anak di bawah umur.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$7,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">12 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)17</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Child Neglect</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Orang tua/wali menelantarkan kesehatan dan keselamatan anak.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)18</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Child Abuse</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Melakukan kekerasan fisik atau penganiayaan pada anak.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)19</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Desecration of a Human Corpse</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak atau memperlakukan mayat manusia secara tidak layak.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)20</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Illegal Possession of Human Remains</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memiliki atau menyembunyikan jasad/sisa jasad manusia secara ilegal.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-pink-400 font-bold whitespace-nowrap">(2)21</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Illegal Exhumation</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Membongkar makam atau mengambil mayat tanpa izin.</div>
            <span class="inline-block mt-1 rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-purple-300">Court Verdict / Special Sentence</span>
          </td>
          <td class="p-2 text-purple-300 font-semibold whitespace-nowrap">Court Verdict</td>
          <td class="p-2 text-purple-300 font-bold whitespace-nowrap">Court Verdict / Death Sentence</td>
        </tr>

        <!-- CATEGORY 3: PROPERTY CRIMES -->
        <tr class="bg-slate-800/70">
          <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-amber-400">Property Crimes</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)01</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Leaving Without Paying</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pergi tanpa membayar tagihan barang/jasa.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$300</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)02</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Petty Theft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri barang dengan nilai di bawah $1,000.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">7 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)03</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Theft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri barang dengan nilai di atas $1,000.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$6,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)04</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Joyriding</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengendarai kendaraan orang lain tanpa izin, bukan untuk memilikinya.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$2,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">7 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)05</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Theft Auto</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pencurian kendaraan bermotor untuk dimiliki permanen.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">12 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)06</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Theft of Firearm</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri senjata api milik orang lain.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$25,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)07</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Tampering with Vehicle</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengotak-atik atau membobol kendaraan tanpa izin.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$3,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
                <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)08</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Commercial Robbery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merampok tempat komersial/toko ritel dengan ancaman.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$7,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)10</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Possession of Stolen Goods</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memegang atau menyimpan barang hasil curian.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$3,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)11</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Possession of Stolen Identification</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Memegang kartu identitas (ID) resmi hasil curian.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$7,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)12</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Larceny Federal Reserve Banks</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembobolan/perampokan bank skala besar (Pacific Standard, dll).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$20,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)13</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Larceny Public Reserve Banks</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Pembobolan/perampokan bank cabang lokal (Fleeca Bank).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$10,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)14</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Grand Larceny Major Property Crime</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Perampokan properti besar (Gruppe Six, Bobcat, Cargo, dll).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$10,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)15</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Theft of an Aircraft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengambil atau menguasai pesawat tanpa izin.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$8,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">30 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)16</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Theft of a Commercial Aircraft</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mengambil atau mengoperasikan pesawat komersial tanpa izin.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$9,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">40 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)17</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Burglary</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Masuk ke bangunan orang lain untuk melakukan kejahatan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$8,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)18</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Trespassing</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Masuk/berada di properti pribadi tanpa izin owner.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$1,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">5 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)19</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Felony Trespassing</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyusup ke area infrastruktur vital (NOOSE, Pembangkit Listrik, dll).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$90,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">45 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)20</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Trespassing of a Military Facility</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyusup ke pangkalan/fasilitas militer terlarang.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$100,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">50 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)21</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Arson</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Sengaja membakar properti, lahan, atau bangunan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$350,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">35 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)22</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Destruction of Gov Property</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak atau menghancurkan aset milik pemerintah.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$156,250</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)23</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Entertainment Property Taking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri uang/aset dari kasino, bioskop, atau tempat hiburan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)24</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Cultural Museum Property Taking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Mencuri/merusak artefak dan karya seni dari museum.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$15,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">60 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)25</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Government Property Taking</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menguasai/mencuri kendaraan atau barang milik negara.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,250</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)26</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Robbery of Vangelico Property</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Perampokan toko perhiasan Vangelico.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$12,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">25 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)27</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Accessory to Robbery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Membantu pelaku perampokan (driver kabur, pantau situasi).</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$5,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">10 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)28</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">ATM Robbery</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Membobol atau mencuri uang dari mesin ATM.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$1,700</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">15 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)29</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Vandalism</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak fasilitas/properti publik atau pribadi secara sengaja.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$4,500</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">8 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)30</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Vandalism on Gov Property</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Merusak properti/fasilitas fisik milik negara.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$9,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">20 Bulan</td>
        </tr>
        <tr class="penal-row hover:bg-slate-800/50 transition-colors">
          <td class="p-2 text-amber-400 font-bold whitespace-nowrap">(3)31</td>
          <td class="p-2">
            <div class="font-semibold text-slate-200">Import/Export Stolen Vehicles</div>
            <div class="mt-1 text-[11px] text-slate-500 font-sans">Menyelundupkan/menyimpan mobil curian di area pelabuhan.</div>
          </td>
          <td class="p-2 text-emerald-400 whitespace-nowrap">$9,000</td>
          <td class="p-2 text-slate-300 whitespace-nowrap">40 Bulan</td>
        </tr>
        <tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-orange-400">
    Fraud, Justice &amp; Government Integrity
  </td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)01</td>
  <td class="p-2"><span class="font-semibold">Forgery</span><p class="text-xs text-slate-400">Pemalsuan dokumen untuk tujuan penipuan.</p></td>
  <td class="p-2 text-emerald-400">$6,500</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)02</td>
  <td class="p-2"><span class="font-semibold">State Document Forgery</span><p class="text-xs text-slate-400">Memalsukan lisensi, ID, atau dokumen resmi pemerintah.</p></td>
  <td class="p-2 text-emerald-400">$15,250</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)03</td>
  <td class="p-2"><span class="font-semibold">Vehicle Registration Fraud</span><p class="text-xs text-slate-400">Memalsukan plat nomor, STNK, atau surat kendaraan.</p></td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)04</td>
  <td class="p-2"><span class="font-semibold">Fraud</span><p class="text-xs text-slate-400">Menipu orang lain demi keuntungan finansial.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)05</td>
  <td class="p-2"><span class="font-semibold">Voter Fraud</span><p class="text-xs text-slate-400">Memanipulasi proses pemilu atau menggunakan identitas palsu.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)06</td>
  <td class="p-2"><span class="font-semibold">Racketeering</span><p class="text-xs text-slate-400">Menjalankan bisnis ilegal terorganisir demi keuntungan.</p></td>
  <td class="p-2 text-emerald-400">$13,000</td>
  <td class="p-2">60 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)07</td>
  <td class="p-2"><span class="font-semibold">Extortion</span><p class="text-xs text-slate-400">Memeras harta atau uang orang lain dengan ancaman.</p></td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">40 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)08</td>
  <td class="p-2"><span class="font-semibold">Money Laundering</span><p class="text-xs text-slate-400">Menyembunyikan asal-usul uang hasil kejahatan.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)09</td>
  <td class="p-2"><span class="font-semibold">1st Degree Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang hasil kejahatan bernilai di atas $460,000.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)10</td>
  <td class="p-2"><span class="font-semibold">Impersonation</span><p class="text-xs text-slate-400">Menyamar menjadi orang lain untuk mengelabui orang.</p></td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)11</td>
  <td class="p-2"><span class="font-semibold">Identity Theft</span><p class="text-xs text-slate-400">Mencuri data pribadi orang lain untuk kejahatan.</p></td>
  <td class="p-2 text-emerald-400">$6,000</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)12</td>
  <td class="p-2"><span class="font-semibold">Impersonating a Gov Employee</span><p class="text-xs text-slate-400">Mengaku sebagai pegawai pemerintah untuk menipu.</p></td>
  <td class="p-2 text-emerald-400">$50,000</td>
  <td class="p-2">35 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)13</td>
  <td class="p-2"><span class="font-semibold">Embezzlement</span><p class="text-xs text-slate-400">Menyalahgunakan atau menggelapkan uang instansi tempat bekerja.</p></td>
  <td class="p-2 text-emerald-400">$10,500</td>
  <td class="p-2">30 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)14</td>
  <td class="p-2"><span class="font-semibold">Conspiracy</span><p class="text-xs text-slate-400">Bersekongkol dengan orang lain untuk merencanakan kejahatan.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)15</td>
  <td class="p-2"><span class="font-semibold">Bribery</span><p class="text-xs text-slate-400">Memberi atau menerima suap untuk memengaruhi keputusan pejabat.</p></td>
  <td class="p-2 text-emerald-400">$100,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)16</td>
  <td class="p-2"><span class="font-semibold">Perjury</span><p class="text-xs text-slate-400">Memberikan keterangan atau sumpah palsu di persidangan resmi.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)17A</td>
  <td class="p-2"><span class="font-semibold">Evidence Tampering</span><p class="text-xs text-slate-400">Merusak, mengubah, atau menyembunyikan barang bukti.</p></td>
  <td class="p-2 text-emerald-400">$30,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)17B</td>
  <td class="p-2"><span class="font-semibold">Evidence Tampering (Aggravated)</span><p class="text-xs text-slate-400">Penghancuran barang bukti secara masif pada sidang besar.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)18</td>
  <td class="p-2"><span class="font-semibold">Witness Tampering</span><p class="text-xs text-slate-400">Mengancam atau menyuap saksi agar tidak bersaksi.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)19</td>
  <td class="p-2"><span class="font-semibold">Intimidating Witness or Victim</span><p class="text-xs text-slate-400">Mengintimidasi saksi atau korban agar menarik laporan.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)20</td>
  <td class="p-2"><span class="font-semibold">Obstruction of Public Duty</span><p class="text-xs text-slate-400">Menghalangi pegawai pemerintah yang sedang bertugas.</p></td>
  <td class="p-2 text-emerald-400">$12,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)21</td>
  <td class="p-2"><span class="font-semibold">Obstruction of Justice</span><p class="text-xs text-slate-400">Menghambat penyidikan polisi atau proses peradilan.</p></td>
  <td class="p-2 text-emerald-400">$50,000</td>
  <td class="p-2">70 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)22</td>
  <td class="p-2"><span class="font-semibold">Misuse of Emergency Hotline</span><p class="text-xs text-slate-400">Menyalahgunakan nomor panggilan darurat (911).</p></td>
  <td class="p-2 text-emerald-400">$500</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)23</td>
  <td class="p-2"><span class="font-semibold">False Report of Emergency</span><p class="text-xs text-slate-400">Membuat laporan palsu pemicu respons darurat (swatting).</p></td>
  <td class="p-2 text-emerald-400">$800</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)24</td>
  <td class="p-2"><span class="font-semibold">Failure to Pay a Fine</span><p class="text-xs text-slate-400">Sengaja menolak membayar denda hukum yang ditetapkan.</p></td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">15 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)25</td>
  <td class="p-2"><span class="font-semibold">Failure to ID to Peace Officer</span><p class="text-xs text-slate-400">Menolak menunjukkan ID resmi saat ditahan secara sah.</p></td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)26</td>
  <td class="p-2"><span class="font-semibold">Misdemeanor Tax Evasion</span><p class="text-xs text-slate-400">Menghindari pajak skala ringan atau di bawah batas felony.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)27</td>
  <td class="p-2"><span class="font-semibold">Felony Tax Evasion</span><p class="text-xs text-slate-400">Menghindari pembayaran pajak skala berat.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)28</td>
  <td class="p-2"><span class="font-semibold">Gambling License Violation</span><p class="text-xs text-slate-400">Mengoperasikan tempat perjudian tanpa lisensi resmi.</p></td>
  <td class="p-2 text-slate-400">- (Tidak tercantum)</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)29</td>
  <td class="p-2"><span class="font-semibold">Criminal Business Operations</span><p class="text-xs text-slate-400">Membuka bisnis kedok untuk kejahatan terorganisir.</p></td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">150 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)30</td>
  <td class="p-2"><span class="font-semibold">Legal Practice Violation</span><p class="text-xs text-slate-400">Praktik pengacara tanpa izin atau lisensi resmi dari negara.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)31</td>
  <td class="p-2"><span class="font-semibold">Medical Practice Violation</span><p class="text-xs text-slate-400">Praktik dokter atau medis tanpa sertifikasi atau lisensi resmi.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)32</td>
  <td class="p-2"><span class="font-semibold">2nd Degree Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang ilegal senilai $150,000 - $459,999.</p></td>
  <td class="p-2 text-emerald-400">$60,000</td>
  <td class="p-2">70 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)33</td>
  <td class="p-2"><span class="font-semibold">3rd Degree Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang ilegal senilai $50,000 - $149,999.</p></td>
  <td class="p-2 text-emerald-400">$35,000</td>
  <td class="p-2">50 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)34</td>
  <td class="p-2"><span class="font-semibold">Unlawful Poss. State Insignia</span><p class="text-xs text-slate-400">Memiliki seragam atau lencana resmi tanpa wewenang.</p></td>
  <td class="p-2 text-emerald-400">$32,000</td>
  <td class="p-2">12 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)35</td>
  <td class="p-2"><span class="font-semibold">Minor Poss. of Illegal Money</span><p class="text-xs text-slate-400">Memiliki uang ilegal senilai di bawah $50,000.</p></td>
  <td class="p-2 text-emerald-400">$15,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)36</td>
  <td class="p-2"><span class="font-semibold">3rd Degree Poss. Illegal Cards/Hacking</span><p class="text-xs text-slate-400">Memiliki 1-10 laundry card atau alat hacking ilegal.</p></td>
  <td class="p-2 text-emerald-400">$30,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)37</td>
  <td class="p-2"><span class="font-semibold">2nd Degree Poss. Illegal Cards/Hacking</span><p class="text-xs text-slate-400">Memiliki 11-39 laundry card atau alat hacking ilegal.</p></td>
  <td class="p-2 text-emerald-400">$60,000</td>
  <td class="p-2">36 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-orange-400">(4)38</td>
  <td class="p-2"><span class="font-semibold">1st Degree Poss. Illegal Cards/Hacking</span><p class="text-xs text-slate-400">Memiliki >= 40 laundry card atau alat hacking ilegal.</p></td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-sky-400">
    Public Order &amp; Court Compliance
  </td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)01</td>
  <td class="p-2">
    <span class="font-semibold">Loitering</span>
    <p class="text-xs text-slate-400">Nongkrong tanpa tujuan jelas di area publik setelah ditegur.</p>
  </td>
  <td class="p-2 text-emerald-400">$50</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)02</td>
  <td class="p-2">
    <span class="font-semibold">Unlawful Assembly</span>
    <p class="text-xs text-slate-400">Berkumpul (3+ orang) dengan niat membuat rusuh/ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)03</td>
  <td class="p-2">
    <span class="font-semibold">Incitement to Riot</span>
    <p class="text-xs text-slate-400">Menghasut/mendorong kerusuhan publik yang anarkis.</p>
  </td>
  <td class="p-2 text-emerald-400">$17,000</td>
  <td class="p-2">30 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)04</td>
  <td class="p-2">
    <span class="font-semibold">Obstruction of Gov Employee</span>
    <p class="text-xs text-slate-400">Menghalangi/menunda tugas pegawai pemerintah.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)05</td>
  <td class="p-2">
    <span class="font-semibold">Disobeying a Peace Officer</span>
    <p class="text-xs text-slate-400">Menolak perintah sah dari aparat penegak hukum.</p>
  </td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)06</td>
  <td class="p-2">
    <span class="font-semibold">Evading a Peace Officer</span>
    <p class="text-xs text-slate-400">Melarikan diri dari kejaran polisi (jalan kaki/kendaraan).</p>
  </td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">6 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)07</td>
  <td class="p-2">
    <span class="font-semibold">Resisting Arrest</span>
    <p class="text-xs text-slate-400">Melawan, menghambat, atau menolak penangkapan fisik secara sah.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)08</td>
  <td class="p-2">
    <span class="font-semibold">Escaping Custody</span>
    <p class="text-xs text-slate-400">Kabur dari penahanan, ruang interogasi, atau penjara.</p>
  </td>
  <td class="p-2 text-emerald-400">$3,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)09</td>
  <td class="p-2">
    <span class="font-semibold">Disturbing the Peace</span>
    <p class="text-xs text-slate-400">Mengganggu ketenangan publik dengan keonaran/perkelahian.</p>
  </td>
  <td class="p-2 text-emerald-400">$8,000</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)10</td>
  <td class="p-2">
    <span class="font-semibold">Failure to Appear</span>
    <p class="text-xs text-slate-400">Mangkir dari panggilan persidangan pengadilan/jaminan.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)11</td>
  <td class="p-2">
    <span class="font-semibold">Subpoena Violation</span>
    <p class="text-xs text-slate-400">Mengabaikan atau melanggar surat panggilan resmi pengadilan.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)12</td>
  <td class="p-2">
    <span class="font-semibold">Violating a Court Order</span>
    <p class="text-xs text-slate-400">Melanggar Perintah Pengadilan / Restraining Order.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)13</td>
  <td class="p-2">
    <span class="font-semibold">Contempt of Court</span>
    <p class="text-xs text-slate-400">Bersikap tidak sopan/mengganggu proses di dalam ruang sidang.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)14</td>
  <td class="p-2">
    <span class="font-semibold">Neglect of Public Duty</span>
    <p class="text-xs text-slate-400">Pejabat publik yang menolak menjalankan tugas wajibnya.</p>
  </td>
  <td class="p-2 text-emerald-400">$7,500</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-sky-400">(5)15</td>
  <td class="p-2">
    <span class="font-semibold">Corruption of Public Office</span>
    <p class="text-xs text-slate-400">Menyalahgunakan jabatan demi keuntungan pribadi.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict / Death Sentence</td>
</tr>
<tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-violet-400">
    Controlled Substances
  </td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)00</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Poss. Schedule I</span>
    <p class="text-xs text-slate-400">Memiliki narkotika Golongan 1 &lt;= 60 gram (&lt;= 3 pack).</p>
  </td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)01</td>
  <td class="p-2">
    <span class="font-semibold">Felony Poss. Schedule I</span>
    <p class="text-xs text-slate-400">Memiliki narkotika Golongan 1 &gt;= 61 gram (&gt; 3 pack).</p>
  </td>
  <td class="p-2 text-emerald-400">$3,000</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)02</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Poss. Schedule II</span>
    <p class="text-xs text-slate-400">Memiliki narkotika Golongan 2 &lt;= 100 gram (&lt;= 1 pack).</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">35 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)03</td>
  <td class="p-2">
    <span class="font-semibold">Felony Poss. Schedule II</span>
    <p class="text-xs text-slate-400">Memiliki narkotika Golongan 2 &gt;= 101 gram (&gt; 1 pack).</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">50 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)04</td>
  <td class="p-2">
    <span class="font-semibold">Drug Smuggling</span>
    <p class="text-xs text-slate-400">Menyelundupkan narkotika dalam jumlah besar (&gt;= 2,000g).</p>
  </td>
  <td class="p-2 text-emerald-400">$50,000</td>
  <td class="p-2">130 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)05</td>
  <td class="p-2">
    <span class="font-semibold">Drug Trafficking</span>
    <p class="text-xs text-slate-400">Menjual/mengedarkan narkotika secara masif (&gt;= 4,000g).</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)06</td>
  <td class="p-2">
    <span class="font-semibold">Drug Manufacturing</span>
    <p class="text-xs text-slate-400">Memproduksi atau meracik sendiri zat narkotika.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict / Death Sentence</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)07A</td>
  <td class="p-2">
    <span class="font-semibold">Possession of Drug Paraphernalia</span>
    <p class="text-xs text-slate-400">Memiliki alat pengolah atau pengonsumsi narkoba.</p>
  </td>
  <td class="p-2 text-emerald-400">$20,000</td>
  <td class="p-2">50 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)07B</td>
  <td class="p-2">
    <span class="font-semibold">Drug Paraphernalia (Bulk &gt;=10)</span>
    <p class="text-xs text-slate-400">Memiliki alat pemroses narkoba borongan (&gt;= 10 set).</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)08</td>
  <td class="p-2">
    <span class="font-semibold">Distribution Controlled Substances</span>
    <p class="text-xs text-slate-400">Memegang &gt;= 800g narkotika dengan niat mengedarkan.</p>
  </td>
  <td class="p-2 text-emerald-400">$20,000</td>
  <td class="p-2">100 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)09</td>
  <td class="p-2">
    <span class="font-semibold">Drugs Selling</span>
    <p class="text-xs text-slate-400">Menjual atau menawarkan narkoba kepada orang lain.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)10</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Poss. of Poppy</span>
    <p class="text-xs text-slate-400">Memiliki 101kg - 199kg tanaman poppy ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)11</td>
  <td class="p-2">
    <span class="font-semibold">Felony Poss. of Poppy</span>
    <p class="text-xs text-slate-400">Memiliki 200kg - 300kg tanaman poppy ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$15,000</td>
  <td class="p-2">80 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-violet-400">(6)12</td>
  <td class="p-2">
    <span class="font-semibold">Aggravated Poss. of Poppy</span>
    <p class="text-xs text-slate-400">Memiliki borongan tanaman poppy ilegal (&gt;= 301kg).</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>
<tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-red-400">
    Firearms &amp; Weapons
  </td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)01</td>
  <td class="p-2">
    <span class="font-semibold">Unlicensed Firearm [Class 1]</span>
    <p class="text-xs text-slate-400">Membawa senjata Kelas 1 (Pistol) tanpa izin sah.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,000</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)02</td>
  <td class="p-2">
    <span class="font-semibold">Unlicensed Firearm [Class 2]</span>
    <p class="text-xs text-slate-400">Membawa senjata Kelas 2 (SMG/Shotgun) tanpa izin sah.</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">50 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)03</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Poss. Firearm [Class 1]</span>
    <p class="text-xs text-slate-400">Mantan narapidana memegang senjata Kelas 1.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,200</td>
  <td class="p-2">12 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)04</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Poss. Firearm [Class 2]</span>
    <p class="text-xs text-slate-400">Membawa senjata Kelas 2 saat masa percobaan/aksi kriminal.</p>
  </td>
  <td class="p-2 text-emerald-400">$30,600</td>
  <td class="p-2">45 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)05</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Poss. Firearm [Class 3]</span>
    <p class="text-xs text-slate-400">Memiliki senjata militer/otomatis Kelas 3 tanpa lisensi khusus.</p>
  </td>
  <td class="p-2 text-emerald-400">$85,000</td>
  <td class="p-2">60 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)06</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Poss. Gov. Firearm</span>
    <p class="text-xs text-slate-400">Memiliki senjata api standar kepolisian/militer secara ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$39,000</td>
  <td class="p-2">160 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)07</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Poss. Gov. Baton</span>
    <p class="text-xs text-slate-400">Membawa tongkat polisi (baton) secara ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$260</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)08</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Poss. Gov. Taser</span>
    <p class="text-xs text-slate-400">Membawa taser standar polisi secara ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)09</td>
  <td class="p-2">
    <span class="font-semibold">Possession Unauthorized Device / Hacking</span>
    <p class="text-xs text-slate-400">Memiliki alat/software peretas fasilitas keamanan negara.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,000</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)10A</td>
  <td class="p-2">
    <span class="font-semibold">Possession Destructive Devices</span>
    <p class="text-xs text-slate-400">Memiliki peledak ringan/bom pipa terlarang.</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">$200 / Court Verdict</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)10B</td>
  <td class="p-2">
    <span class="font-semibold">Poss. Destructive Devices (Military)</span>
    <p class="text-xs text-slate-400">Memiliki peledak kelas militer (Granat, C4, dll).</p>
  </td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
  <td class="p-2 text-purple-400 font-semibold">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)11</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Use of Explosives</span>
    <p class="text-xs text-slate-400">Menggunakan peledak untuk merusak atau mengancam jiwa.</p>
  </td>
  <td class="p-2 text-emerald-400">$20,000</td>
  <td class="p-2">25 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)12</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Poss. Thermite Charge</span>
    <p class="text-xs text-slate-400">Memiliki thermite skala kecil tanpa niat kejahatan.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,500</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)13</td>
  <td class="p-2">
    <span class="font-semibold">Felony Poss. Thermite Charge</span>
    <p class="text-xs text-slate-400">Memiliki thermite dengan niat membobol/kejahatan.</p>
  </td>
  <td class="p-2 text-emerald-400">$12,000</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)14</td>
  <td class="p-2">
    <span class="font-semibold">Failure to Report Stolen Firearm</span>
    <p class="text-xs text-slate-400">Tidak melapor ke polisi saat senjata api miliknya hilang/dicuri.</p>
  </td>
  <td class="p-2 text-emerald-400">$3,000</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)15</td>
  <td class="p-2">
    <span class="font-semibold">Criminal Use of a Firearm</span>
    <p class="text-xs text-slate-400">Membunyikan/menggunakan senjata api saat beraksi kejahatan.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">8 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)16</td>
  <td class="p-2">
    <span class="font-semibold">Brandishing of a Firearm</span>
    <p class="text-xs text-slate-400">Menodongkan/menunjukkan senjata api di publik secara menakutkan.</p>
  </td>
  <td class="p-2 text-emerald-400">$4,500</td>
  <td class="p-2">7 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)17</td>
  <td class="p-2">
    <span class="font-semibold">Brandishing Non-Firearm</span>
    <p class="text-xs text-slate-400">Menodongkan senjata tajam/tumpul untuk mengancam orang.</p>
  </td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)18</td>
  <td class="p-2">
    <span class="font-semibold">Weapon Discharge Violation</span>
    <p class="text-xs text-slate-400">Menembakkan senjata di area sembarangan tanpa urgensi.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)19</td>
  <td class="p-2">
    <span class="font-semibold">Unlawful Poss. Ammunition</span>
    <p class="text-xs text-slate-400">Memiliki amunisi (sampai 300 butir) tanpa lisensi.</p>
  </td>
  <td class="p-2 text-emerald-400">$345</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)20</td>
  <td class="p-2">
    <span class="font-semibold">Illegal Dist. Ammunition</span>
    <p class="text-xs text-slate-400">Menjual/membagi amunisi (&lt;2,000 butir) tanpa izin.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,460</td>
  <td class="p-2">12 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)21</td>
  <td class="p-2">
    <span class="font-semibold">1st Degree Sale Legalized Firearm</span>
    <p class="text-xs text-slate-400">Transaksi penjualan ilegal senjata Kelas 1 (sampai 10 pucuk).</p>
  </td>
  <td class="p-2 text-emerald-400">$12,250</td>
  <td class="p-2">60 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)22</td>
  <td class="p-2">
    <span class="font-semibold">2nd Degree Sale Legalized Firearm</span>
    <p class="text-xs text-slate-400">Transaksi penjualan ilegal senjata Kelas 1 (sampai 5 pucuk).</p>
  </td>
  <td class="p-2 text-emerald-400">$8,250</td>
  <td class="p-2">40 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)23</td>
  <td class="p-2">
    <span class="font-semibold">3rd Degree Sale Legalized Firearm</span>
    <p class="text-xs text-slate-400">Transaksi penjualan ilegal senjata Kelas 1 (sampai 2 pucuk).</p>
  </td>
  <td class="p-2 text-emerald-400">$4,750</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)27</td>
  <td class="p-2">
    <span class="font-semibold">1st Degree Sale Gov. Firearm</span>
    <p class="text-xs text-slate-400">Menjual ilegal senjata dinas pemerintah (sampai 10 pucuk).</p>
  </td>
  <td class="p-2 text-emerald-400">$60,000</td>
  <td class="p-2">150 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)28</td>
  <td class="p-2">
    <span class="font-semibold">2nd Degree Sale Gov. Firearm</span>
    <p class="text-xs text-slate-400">Menjual ilegal senjata dinas pemerintah (sampai 5 pucuk).</p>
  </td>
  <td class="p-2 text-emerald-400">$40,000</td>
  <td class="p-2">120 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)29</td>
  <td class="p-2">
    <span class="font-semibold">3rd Degree Sale Gov. Firearm</span>
    <p class="text-xs text-slate-400">Menjual ilegal senjata dinas pemerintah (sampai 2 pucuk).</p>
  </td>
  <td class="p-2 text-emerald-400">$20,000</td>
  <td class="p-2">80 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)30</td>
  <td class="p-2">
    <span class="font-semibold">Sale Illegal Weapons / Destructive</span>
    <p class="text-xs text-slate-400">Menjual senjata terlarang/peledak rakitan.</p>
  </td>
  <td class="p-2 text-emerald-400">$50,000</td>
  <td class="p-2">120 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)31</td>
  <td class="p-2">
    <span class="font-semibold">Manufacture Illegal Weapon / Destructive</span>
    <p class="text-xs text-slate-400">Merakit/membuat sendiri senjata api atau peledak ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">Court Verdict</td>
  <td class="p-2">Court Verdict / Death Sentence</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)32</td>
  <td class="p-2">
    <span class="font-semibold">Flying into Restricted Airspace</span>
    <p class="text-xs text-slate-400">Terbang di ruang udara terlarang/pangkalan tanpa izin.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,000</td>
  <td class="p-2">10 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)33</td>
  <td class="p-2">
    <span class="font-semibold">Piloting Without Proper License</span>
    <p class="text-xs text-slate-400">Mengemudikan pesawat/helikopter tanpa lisensi pilot.</p>
  </td>
  <td class="p-2 text-emerald-400">$500</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)34</td>
  <td class="p-2">
    <span class="font-semibold">Vigilantism</span>
    <p class="text-xs text-slate-400">Main hakim sendiri menggunakan kekerasan tanpa wewenang.</p>
  </td>
  <td class="p-2 text-emerald-400">$200</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)35</td>
  <td class="p-2">
    <span class="font-semibold">Jaywalking</span>
    <p class="text-xs text-slate-400">Menyeberang jalan sembarangan di luar zebra cross.</p>
  </td>
  <td class="p-2 text-emerald-400">$50</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)36</td>
  <td class="p-2">
    <span class="font-semibold">Weapon Smuggling</span>
    <p class="text-xs text-slate-400">Penyelundupan senjata (lebih dari 8 pucuk) atau attachment borongan (lebih dari 40).</p>
  </td>
  <td class="p-2 text-emerald-400">Court Verdict</td>
  <td class="p-2">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)37</td>
  <td class="p-2">
    <span class="font-semibold">Eavesdropping</span>
    <p class="text-xs text-slate-400">Merekam/menyadap percakapan privat secara diam-diam.</p>
  </td>
  <td class="p-2 text-emerald-400">$875</td>
  <td class="p-2">8 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)38</td>
  <td class="p-2">
    <span class="font-semibold">Attempted Prison Break</span>
    <p class="text-xs text-slate-400">Percobaan membobol atau melarikan diri dari penjara yang gagal.</p>
  </td>
  <td class="p-2 text-emerald-400">$800</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)39</td>
  <td class="p-2">
    <span class="font-semibold">Prison Break</span>
    <p class="text-xs text-slate-400">Berhasil kabur atau mengeluarkan tahanan dari penjara.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">40 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)40</td>
  <td class="p-2">
    <span class="font-semibold">Accessory to Prison Break</span>
    <p class="text-xs text-slate-400">Membantu atau memfasilitasi aksi pembobolan penjara.</p>
  </td>
  <td class="p-2 text-emerald-400">$2,000</td>
  <td class="p-2">35 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)41</td>
  <td class="p-2">
    <span class="font-semibold">Harboring Fugitive</span>
    <p class="text-xs text-slate-400">Menyembunyikan buronan yang sedang dicari polisi.</p>
  </td>
  <td class="p-2 text-emerald-400">Court Verdict</td>
  <td class="p-2">Court Verdict / Death Sentence</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)42</td>
  <td class="p-2">
    <span class="font-semibold">Drive-By Shooting</span>
    <p class="text-xs text-slate-400">Menembak dari atas kendaraan yang sedang melaju.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,250</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)43</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Poss. Bulletproof Vest</span>
    <p class="text-xs text-slate-400">Memiliki rompi antipeluru kurang dari 10 unit tanpa izin.</p>
  </td>
  <td class="p-2 text-emerald-400">$3,280</td>
  <td class="p-2">25 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)44</td>
  <td class="p-2">
    <span class="font-semibold">Felony Poss. Bulletproof Vest</span>
    <p class="text-xs text-slate-400">Memiliki rompi antipeluru borongan (10 unit atau lebih) tanpa izin.</p>
  </td>
  <td class="p-2 text-emerald-400">Court Verdict</td>
  <td class="p-2">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)45</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Poss. Weapon Component</span>
    <p class="text-xs text-slate-400">Memiliki komponen senjata api ilegal kurang dari 20 unit.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">25 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)46</td>
  <td class="p-2">
    <span class="font-semibold">Felony Poss. Weapon Component</span>
    <p class="text-xs text-slate-400">Memiliki komponen senjata api ilegal sebanyak 20 unit atau lebih.</p>
  </td>
  <td class="p-2 text-emerald-400">$7,000</td>
  <td class="p-2">30 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)47</td>
  <td class="p-2">
    <span class="font-semibold">Manufacturing Weapon Components</span>
    <p class="text-xs text-slate-400">Memproduksi atau membuat sendiri komponen senjata rakitan.</p>
  </td>
  <td class="p-2 text-emerald-400">Court Verdict</td>
  <td class="p-2">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)48</td>
  <td class="p-2">
    <span class="font-semibold">Ammunition Smuggling</span>
    <p class="text-xs text-slate-400">Penyelundupan amunisi dalam jumlah besar (lebih dari 2.000 butir).</p>
  </td>
  <td class="p-2 text-emerald-400">Court Verdict</td>
  <td class="p-2">Court Verdict</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(7)49</td>
  <td class="p-2">
    <span class="font-semibold">Usage of Suppressor</span>
    <p class="text-xs text-slate-400">Menggunakan atau memasang peredam suara (suppressor) ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">20 Bulan</td>
</tr>
<tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-red-400">Vehicle &amp; Traffic</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)01</td>
  <td class="p-2">
    <span class="font-semibold">Vehicle Registration Violation</span>
    <p class="text-xs text-slate-400">Mengendarai kendaraan tanpa plat nomor / dokumen mati.</p>
  </td>
  <td class="p-2 text-emerald-400">$15,000</td>
  <td class="p-2">30 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)02</td>
  <td class="p-2">
    <span class="font-semibold">Hit and Run</span>
    <p class="text-xs text-slate-400">Kabur dari lokasi kecelakaan lalu lintas.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,000</td>
  <td class="p-2">30 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)04</td>
  <td class="p-2">
    <span class="font-semibold">Evading Peace Officer on Aircraft</span>
    <p class="text-xs text-slate-400">Kabur dari kejaran polisi menggunakan pesawat/helikopter.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">16 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)05</td>
  <td class="p-2">
    <span class="font-semibold">Unsafe Usage of Bicycle</span>
    <p class="text-xs text-slate-400">Mengendarai sepeda secara ugal-ugalan yang membahayakan.</p>
  </td>
  <td class="p-2 text-emerald-400">$250</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)06</td>
  <td class="p-2">
    <span class="font-semibold">Reckless Driving</span>
    <p class="text-xs text-slate-400">Mengendarai kendaraan secara ugal-ugalan dan membahayakan.</p>
  </td>
  <td class="p-2 text-emerald-400">$500</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)07</td>
  <td class="p-2">
    <span class="font-semibold">Failure to Present ID (Traffic)</span>
    <p class="text-xs text-slate-400">Gagal/menolak menunjukkan SIM saat razia lalu lintas.</p>
  </td>
  <td class="p-2 text-emerald-400">$200</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)08</td>
  <td class="p-2">
    <span class="font-semibold">Reckless Evading Peace Officer</span>
    <p class="text-xs text-slate-400">Kabur dari polisi dengan kecepatan tinggi yang berbahaya.</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)09</td>
  <td class="p-2">
    <span class="font-semibold">Aerial Evasion</span>
    <p class="text-xs text-slate-400">Melarikan diri dari pengejaran udara polisi.</p>
  </td>
  <td class="p-2 text-emerald-400">$800</td>
  <td class="p-2">16 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)10</td>
  <td class="p-2">
    <span class="font-semibold">Riding on Sidewalk</span>
    <p class="text-xs text-slate-400">Mengendarai kendaraan di atas trotoar pejalan kaki.</p>
  </td>
  <td class="p-2 text-emerald-400">$100</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)11</td>
  <td class="p-2">
    <span class="font-semibold">Illegal Passing</span>
    <p class="text-xs text-slate-400">Menyalip kendaraan lain secara berbahaya/garis ganda.</p>
  </td>
  <td class="p-2 text-emerald-400">$150</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)12</td>
  <td class="p-2">
    <span class="font-semibold">Illegal Turn</span>
    <p class="text-xs text-slate-400">Berbelok atau putar balik (U-turn) di area terlarang.</p>
  </td>
  <td class="p-2 text-emerald-400">$150</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)13</td>
  <td class="p-2">
    <span class="font-semibold">Driving Wrong Side of Road</span>
    <p class="text-xs text-slate-400">Mengemudi melawan arus lalu lintas.</p>
  </td>
  <td class="p-2 text-emerald-400">$100</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)14</td>
  <td class="p-2">
    <span class="font-semibold">Negligent Operation of Vehicle</span>
    <p class="text-xs text-slate-400">Lalai saat mengemudikan kendaraan hingga memicu bahaya.</p>
  </td>
  <td class="p-2 text-emerald-400">$100</td>
  <td class="p-2">0 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)15</td>
  <td class="p-2">
    <span class="font-semibold">Yield Violation</span>
    <p class="text-xs text-slate-400">Tidak memberi jalan di penyeberangan atau rambu jalan.</p>
  </td>
  <td class="p-2 text-emerald-400">$25</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)16</td>
  <td class="p-2">
    <span class="font-semibold">Failure Obey Traffic Controls</span>
    <p class="text-xs text-slate-400">Menerobos lampu merah atau melanggar rambu lalu lintas.</p>
  </td>
  <td class="p-2 text-emerald-400">$100</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)17</td>
  <td class="p-2">
    <span class="font-semibold">Failure Yield to Emergency Vehicle</span>
    <p class="text-xs text-slate-400">Tidak memberi jalan pada kendaraan darurat (Ambulan/Polisi).</p>
  </td>
  <td class="p-2 text-emerald-400">$100</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)18</td>
  <td class="p-2">
    <span class="font-semibold">Unauthorized Parking</span>
    <p class="text-xs text-slate-400">Parkir sembarangan / di garis merah / pemadam kebakaran.</p>
  </td>
  <td class="p-2 text-emerald-400">$75</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)19</td>
  <td class="p-2">
    <span class="font-semibold">Third Degree Speeding</span>
    <p class="text-xs text-slate-400">Ngebut melebihi batas kecepatan sebesar 61-80 KM/H.</p>
  </td>
  <td class="p-2 text-emerald-400">$300</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)20</td>
  <td class="p-2">
    <span class="font-semibold">Second Degree Speeding</span>
    <p class="text-xs text-slate-400">Ngebut melebihi batas kecepatan sebesar 81-120 KM/H.</p>
  </td>
  <td class="p-2 text-emerald-400">$500</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)21</td>
  <td class="p-2">
    <span class="font-semibold">First Degree Speeding</span>
    <p class="text-xs text-slate-400">Ngebut ekstrem melebihi batas kecepatan 121-260 KM/H.</p>
  </td>
  <td class="p-2 text-emerald-400">$600</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)22</td>
  <td class="p-2">
    <span class="font-semibold">Driving Without Valid License</span>
    <p class="text-xs text-slate-400">Mengemudikan kendaraan tanpa memiliki SIM sah.</p>
  </td>
  <td class="p-2 text-emerald-400">$200</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)23</td>
  <td class="p-2">
    <span class="font-semibold">Driving While Intoxicated (DWI)</span>
    <p class="text-xs text-slate-400">Mengemudi di bawah pengaruh alkohol di atas batas legal.</p>
  </td>
  <td class="p-2 text-emerald-400">$250</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)24</td>
  <td class="p-2">
    <span class="font-semibold">Driving Under Influence (DUI)</span>
    <p class="text-xs text-slate-400">Mengemudi di bawah pengaruh obat-obatan/narkotika.</p>
  </td>
  <td class="p-2 text-emerald-400">$700</td>
  <td class="p-2">12 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)25</td>
  <td class="p-2">
    <span class="font-semibold">Driving Without Headlights</span>
    <p class="text-xs text-slate-400">Berkendara malam hari tanpa menyalakan lampu utama.</p>
  </td>
  <td class="p-2 text-emerald-400">$150</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)26</td>
  <td class="p-2">
    <span class="font-semibold">Operating Unsafe Vehicle</span>
    <p class="text-xs text-slate-400">Mengendarai kendaraan yang rusak parah &amp; membahayakan.</p>
  </td>
  <td class="p-2 text-emerald-400">$200</td>
  <td class="p-2">5 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)27</td>
  <td class="p-2">
    <span class="font-semibold">Tinted Windows</span>
    <p class="text-xs text-slate-400">Kaca film kendaraan terlalu gelap (melebihi 30% batas legal).</p>
  </td>
  <td class="p-2 text-emerald-400">$250</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)28</td>
  <td class="p-2">
    <span class="font-semibold">Vehicular Noise Violation</span>
    <p class="text-xs text-slate-400">Knalpot/suara kendaraan melebihi batas desibel jalanan.</p>
  </td>
  <td class="p-2 text-emerald-400">$500</td>
  <td class="p-2">0 Bulan</td>
</tr>
<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)29</td>
  <td class="p-2">
    <span class="font-semibold">Unauthorized Speed Contests</span>
    <p class="text-xs text-slate-400">Mengadakan/berpartisipasi dalam balap liar jalanan.</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">8 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)30</td>
  <td class="p-2">
    <span class="font-semibold">Street Racing</span>
    <p class="text-xs text-slate-400">Berkompetisi langsung dalam aksi balap liar jalanan.</p>
  </td>
  <td class="p-2 text-emerald-400">$15,000</td>
  <td class="p-2">35 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)31</td>
  <td class="p-2">
    <span class="font-semibold">Possession Nitrous Oxide</span>
    <p class="text-xs text-slate-400">Membawa tabung NOS untuk performa kendaraan secara ilegal.</p>
  </td>
  <td class="p-2 text-emerald-400">$2,500</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)32</td>
  <td class="p-2">
    <span class="font-semibold">Use of Nitrous Oxide</span>
    <p class="text-xs text-slate-400">Menggunakan/menyemprotkan NOS saat berkendara di jalan.</p>
  </td>
  <td class="p-2 text-emerald-400">$2,700</td>
  <td class="p-2">22 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)33</td>
  <td class="p-2">
    <span class="font-semibold">Poss. Illegal Racing Device</span>
    <p class="text-xs text-slate-400">Memiliki perangkat peretas pembatas kecepatan kendaraan.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,570</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)34</td>
  <td class="p-2">
    <span class="font-semibold">Failure to Use Safety Equipment</span>
    <p class="text-xs text-slate-400">Berkendara tanpa helm (motor) atau sabuk pengaman (mobil).</p>
  </td>
  <td class="p-2 text-emerald-400">$400</td>
  <td class="p-2">0 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)35</td>
  <td class="p-2">
    <span class="font-semibold">Misdemeanor Instrumentality</span>
    <p class="text-xs text-slate-400">Menggunakan kendaraan untuk membantu &lt;=3 tindak kejahatan ringan.</p>
  </td>
  <td class="p-2 text-emerald-400">$20,000</td>
  <td class="p-2">25 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(8)36</td>
  <td class="p-2">
    <span class="font-semibold">Felony Instrumentality</span>
    <p class="text-xs text-slate-400">Menggunakan kendaraan untuk memfasilitasi &gt;=4 tindak kejahatan.</p>
  </td>
  <td class="p-2 text-emerald-400">$35,000</td>
  <td class="p-2">40 Bulan</td>
</tr>

<tr class="bg-slate-800/70">
  <td colspan="4" class="px-3 py-2 text-xs font-bold uppercase tracking-widest text-red-400">Hunting &amp; Animal</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(9)01</td>
  <td class="p-2">
    <span class="font-semibold">Hunting in Unregulated Area</span>
    <p class="text-xs text-slate-400">Berburu di luar zona resmi negara.</p>
  </td>
  <td class="p-2 text-emerald-400">$600</td>
  <td class="p-2">10 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(9)02</td>
  <td class="p-2">
    <span class="font-semibold">Poaching</span>
    <p class="text-xs text-slate-400">Memburu/membunuh hewan langka yang dilindungi (Hiu, Singa, dll).</p>
  </td>
  <td class="p-2 text-emerald-400">$10,000</td>
  <td class="p-2">20 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(9)03</td>
  <td class="p-2">
    <span class="font-semibold">Hunting/Fishing Without License</span>
    <p class="text-xs text-slate-400">Berburu atau memancing tanpa memiliki lisensi resmi.</p>
  </td>
  <td class="p-2 text-emerald-400">$5,000</td>
  <td class="p-2">25 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(9)04A</td>
  <td class="p-2">
    <span class="font-semibold">Animal Cruelty</span>
    <p class="text-xs text-slate-400">Penganiayaan atau penelantaran terhadap hewan.</p>
  </td>
  <td class="p-2 text-emerald-400">$1,500</td>
  <td class="p-2">15 Bulan</td>
</tr>

<tr class="penal-row hover:bg-slate-800/50 transition-colors">
  <td class="p-2 text-red-400">(9)04B</td>
  <td class="p-2">
    <span class="font-semibold">Animal Cruelty (Aggravated)</span>
    <p class="text-xs text-slate-400">Penyiksaan sengaja, adu hewan, atau pembunuhan hewan.</p>
  </td>
  <td class="p-2 text-emerald-400">$3,000</td>
  <td class="p-2">25 Bulan</td>
</tr>
            `
          },
          {
            id: "weapons",
            title: "Peralatan Kepolisian",
            subtitle: "Standard Issue Equipment untuk seluruh petugas patroli.",
            icon: "▤",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-blue-500">
                  <h4 class="font-bold text-white mb-1">Combat Pistol / Service Weapon</h4>
                  <p class="text-slate-300">Senjata api standar. Penggunaan harus sesuai Prosedur Use of Force (Lethal Force hanya jika ada ancaman mematikan).</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-amber-500">
                  <h4 class="font-bold text-white mb-1">Stun Gun / Taser X2</h4>
                  <p class="text-slate-300">Senjata melumpuhkan jarak dekat non-lethal untuk suspek yang agresif secara fisik namun tidak bersenjata api.</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-slate-400">
                  <h4 class="font-bold text-white mb-1">Nightstick / Baton</h4>
                  <p class="text-slate-300">Tongkat pemukul untuk mengendalikan kerusuhan massa / pertahanan diri jarak dekat.</p>
                </div>
                <div class="glass-card p-4 rounded-xl border-l-2 border-l-emerald-500">
                  <h4 class="font-bold text-white mb-1">Spike Strips & Radar Gun</h4>
                  <p class="text-slate-300">Peralatan taktis jalan raya untuk menghentikan Pengejaran Kendaraan & pengukur kecepatan lalu lintas.</p>
                </div>
              </div>
            `
          },
          {
            id: "pursuit",
            title: "Vehicle Pursuit",
            subtitle: "SOP dan manuver taktis dalam kejar-kejaran kendaraan (10-80).",
            icon: "➤",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-4 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Taktik Pengejaran Terotorisasi:</h3>
                <div class="space-y-3">
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">Primary Unit:</b> Mobil patroli terdepan yang memimpin pursuit. Fokus mengemudi dan melaporkan pergerakan jalan.
                  </div>
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">Secondary Unit:</b> Mobil patroli kedua di belakang primary. Mengambil alih komunikasi radio penuh agar Primary fokus mengemudi.
                  </div>
                  <div class="p-3 bg-dark-900/70 rounded-lg">
                    <b class="text-police-gold">PIT Maneuver (Precision Immobilization Technique):</b> Diizinkan hanya oleh Sergeant+ pada kecepatan di bawah 50 MPH dan di area aman dari pejalan kaki.
                  </div>
                </div>
              </div>
            `
          },
          {
            id: "training",
            title: "Training & Recruitment",
            subtitle: "Jalur karir, pelatihan akademi, dan ujian sertifikasi.",
            icon: "✦",
            content: `
              <div class="glass-card p-5 rounded-xl space-y-3 text-xs text-slate-300">
                <h3 class="font-bold text-white text-sm">Tahapan Rekrutmen LSPD:</h3>
                <ol class="list-decimal pl-5 space-y-2">
                  <li><b>Pendaftaran Berkas & Form Aplikasi Web</b></li>
                  <li><b>Ujian Wawancara Psikologi & Pengetahuan SOP</b></li>
                  <li><b>Pelatihan Akademi LSPD (Physical & Radio Test)</b></li>
                  <li><b>Masa Percobaan Cadet (Probationary Field Duty)</b></li>
                  <li><b>Kelulusan Menjadi Officer I Full-Pledge</b></li>
                </ol>
              </div>
            `
          }
        ]
      }
    ];

    let currentPageId = "chain";

    // Flatten pages list untuk mencari index/nomor modul secara urut
    const ALL_PAGES = HANDBOOK_DATA.flatMap(cat => cat.pages);

    // INITIALIZE APP
    window.onload = function() {
      renderNavigation();
      loadPage(currentPageId);

      // Keyboard Shortcut for Search
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          document.getElementById('searchInput').focus();
        }
      });
    };

    // RENDER SIDEBAR NAVIGATION
    function renderNavigation(filter = "") {
      const navContainer = document.getElementById('navContainer');
      navContainer.innerHTML = "";

      HANDBOOK_DATA.forEach(cat => {
        // Filter pages based on search text
        const filteredPages = cat.pages.filter(p => 
          p.title.toLowerCase().includes(filter.toLowerCase()) || 
          p.subtitle.toLowerCase().includes(filter.toLowerCase()) ||
          p.content.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredPages.length > 0) {
          const categoryHeader = document.createElement('div');
          categoryHeader.className = "text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4 px-2 font-mono";
          categoryHeader.innerText = cat.category;
          navContainer.appendChild(categoryHeader);

          filteredPages.forEach(page => {
            const btn = document.createElement('button');
            const isActive = page.id === currentPageId;
            btn.className = `w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-left group ${
              isActive 
                ? 'bg-police-blue/30 text-white border border-police-accent/40 font-semibold shadow-md' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-dark-700/60'
            }`;
            btn.onclick = () => {
              loadPage(page.id);
              if (window.innerWidth < 768) toggleSidebar();
            };

            btn.innerHTML = `
              <span class="${isActive ? 'text-police-gold' : 'text-slate-500 group-hover:text-slate-300'} font-mono">${page.icon}</span>
              <span class="truncate">${page.title}</span>
            `;
            navContainer.appendChild(btn);
          });
        }
      });

      if (navContainer.children.length === 0) {
        navContainer.innerHTML = `<div class="text-center py-8 text-xs text-slate-500 font-mono">Hasil pencarian tidak ditemukan...</div>`;
      }
    }

    // LOAD SELECTED PAGE CONTENT
    function loadPage(pageId) {
      currentPageId = pageId;
      
      let foundPage = null;
      let foundCategory = "";

      HANDBOOK_DATA.forEach(cat => {
        const p = cat.pages.find(x => x.id === pageId);
        if (p) {
          foundPage = p;
          foundCategory = cat.category;
        }
      });

      if (!foundPage) return;

      // Hitung urutan modul dinamis berdasarkan urutan elemen di ALL_PAGES
      const moduleIndex = ALL_PAGES.findIndex(p => p.id === pageId);
      if (moduleIndex !== -1) {
        document.getElementById('moduleCount').innerText = moduleIndex + 1;
      }

      // Update UI Header & Breadcrumb
      document.getElementById('breadcrumbCategory').innerText = foundCategory;
      document.getElementById('breadcrumbPage').innerText = foundPage.title;
      document.getElementById('pageTitle').innerText = foundPage.title;
      document.getElementById('pageSubtitle').innerText = foundPage.subtitle;

      // Update Active Navigation Item
      renderNavigation(document.getElementById('searchInput').value);

      // Render Content Body
      document.getElementById('pageContent').innerHTML = foundPage.content;
    }

    // SEARCH FILTER HANDLE
    function handleSearch(query) {
      renderNavigation(query);
    }

    // SIDEBAR TOGGLE MOBILE
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobileOverlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }


// THEME TOGGLE (saved locally in this browser)
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  const meta = document.getElementById('themeColorMeta');
  if (icon) icon.textContent = isLight ? '🌙' : '☀️';
  if (label) label.textContent = isLight ? 'Mode Gelap' : 'Mode Cerah';
  if (meta) meta.setAttribute('content', isLight ? '#f4f6fa' : '#0f1115');
  const button = document.getElementById('themeToggle');
  if (button) button.setAttribute('aria-label', isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode cerah');
}
function toggleTheme() {
  const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
  try { localStorage.setItem('lspd-handbook-theme', nextTheme); } catch (e) {}
  applyTheme(nextTheme);
}
(function initTheme() {
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('lspd-handbook-theme') || 'dark'; } catch (e) {}
  applyTheme(savedTheme);
})();



// Welcome screen transition into the handbook
function openHandbook() {
  const welcome = document.getElementById('welcomeScreen');
  if (!welcome || welcome.classList.contains('is-leaving')) return;
  welcome.classList.add('is-leaving');
  document.body.classList.add('handbook-entered');
  window.setTimeout(() => {
    welcome.setAttribute('aria-hidden', 'true');
    welcome.style.display = 'none';
  }, 780);
}
