export default function ToolsPage() {
  const tools = [
    {
      phase: "Evidence Collection & Preservation",
      items: [
        { name: "FTK Imager", desc: "Industry standard for creating forensic images (bit-to-bit copies) without installing software", link: "https://www.exterro.com/ftk-imager" },
        { name: "Tableau Write-Blockers", desc: "Physical hardware bridges that prevent data from being written back to evidence drives", link: "#" },
        { name: "Cellebrite UFED", desc: "Primary tool for mobile device extraction, bypasses locks to pull data from smartphones", link: "https://cellebrite.com" },
        { name: "Guymager", desc: "Popular open-source forensic imager for Linux-based acquisitions", link: "https://guymager.sourceforge.io" },
        { name: "Faraday Bags", desc: "Shielded pouches that block wireless signals to prevent remote wiping", link: "#" }
      ]
    },
    {
      phase: "Volatile Data & Memory Forensics",
      items: [
        { name: "Volatility Framework", desc: "Powerful open-source tool for analyzing memory dumps to find processes, passwords, and network connections", link: "https://www.volatilityfoundation.org" },
        { name: "DumpIt", desc: "Simple utility to create a snapshot of Windows machine's physical memory", link: "#" },
        { name: "Magnet RAM Capture", desc: "Free tool for quick memory imaging", link: "https://www.magnetforensics.com/resources/magnet-ram-capture" }
      ]
    },
    {
      phase: "Deep Analysis & File Recovery",
      items: [
        { name: "Autopsy / Sleuth Kit", desc: "Leading open-source digital forensics platform with GUI for web history, email, and keyword search", link: "https://www.sleuthkit.org/autopsy" },
        { name: "EnCase", desc: "High-end commercial suite for deep-dive analysis and case management", link: "https://www.opentext.com/products/encase-forensic" },
        { name: "Magnet AXIOM", desc: "Excellent for artifact-based recovery - chat logs, social media, cloud data", link: "https://www.magnetforensics.com/products/magnet-axiom" },
        { name: "Wireshark", desc: "Network forensics tool to analyze packet captures and trace malicious traffic", link: "https://www.wireshark.org" },
        { name: "PhotoRec / TestDisk", desc: "Specialized in carving files out of unallocated space or recovering lost partitions", link: "https://www.cgsecurity.org/wiki/PhotoRec" }
      ]
    },
    {
      phase: "Reporting & Courtroom Presentation",
      items: [
        { name: "Casenotes", desc: "Open-source tool for detailed, timestamped logs of every investigation action", link: "#" },
        { name: "Evidence Center (Belkasoft)", desc: "Provides Evidence Maps and automated reports easy for non-technical people", link: "https://belkasoft.com/evidence-center" },
        { name: "Veracrypt", desc: "Secure storage for case files and findings before court finalization", link: "https://www.veracrypt.fr" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - matching login page style */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-mono text-green-400 mb-2"># Digital Forensic Tools</h1>
          <p className="text-gray-500 font-mono text-sm">Complete toolkit covering the entire forensic investigation lifecycle</p>
        </div>

        {tools.map((phase, idx) => (
          <div key={idx} className="mb-10">
            {/* Phase header with terminal-style formatting */}
            <div className="border-b border-green-500/30 mb-5 pb-2">
              <h2 className="text-green-400 font-mono text-sm tracking-wide">
                $ {phase.phase.toUpperCase()}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phase.items.map((tool, toolIdx) => (
                <div key={toolIdx} className="border border-gray-800 hover:border-green-500/50 transition-colors p-4 rounded-sm bg-black">
                  <h3 className="text-gray-200 font-mono text-base mb-2">{tool.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 font-mono">{tool.desc}</p>
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-500 hover:text-green-400 text-xs font-mono transition-colors inline-flex items-center gap-1"
                  >
                    [ access ]
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}