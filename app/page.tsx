import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1c] text-white font-mono">
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-widest mb-6 uppercase" style={{ letterSpacing: "0.15em" }}>
          OPS FUEL
        </h1>
        <p className="max-w-xl text-lg sm:text-xl opacity-80 mb-8">
          Developed for high-performance military missions. Essential nutrients, real energy. Zero compromise.
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-black text-sm tracking-widest uppercase rounded-none shadow-lg hover:bg-gray-200">
          Discover More
        </button>
      </section>

      <section className="bg-[#2a2a2a] py-16 px-6 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-widest">Key Benefits</h2>
          <ul className="list-disc pl-6 text-lg opacity-90">
            <li>Protein-rich & muscle-fueling</li>
            <li>Electrolyte-enhanced hydration</li>
            <li>Natural adaptogens for focus</li>
            <li>Minimal sugar, clean energy</li>
            <li>Tested for extreme conditions</li>
          </ul>
        </div>
        <div className="border border-gray-700 p-6">
          <h3 className="text-xl font-semibold mb-2 tracking-wide">Ops Fuel Sachet</h3>
          <Image
            src="/ops-fuel-pouch.jpg"
            alt="Ops Fuel Sachet"
            width={400}
            height={600}
            className="mb-4"
          />
          <p className="text-sm leading-6 opacity-80">
            - 25 mg: Support immune function<br />
            - 200 mg: Muscle recovery<br />
            - L-Theanine: Cognitive support<br />
            - 200 mcg: Vitamin B12
          </p>
        </div>
      </section>

      <section className="bg-[#1c1c1c] py-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 uppercase tracking-widest text-center">Complete Tactical Meal</h2>
        <div className="max-w-4xl mx-auto text-sm sm:text-base opacity-90">
          <p className="mb-4">Ops Fuel is volledig natuurlijk, vrij van gluten, lactose, soja en noten, zetmeelvrij en dagelijks inzetbaar. Per portie (120 g ~580 kcal):</p>
          <ul className="list-disc pl-6">
            <li>35 g eiwitten (25 g caseïne, 10 g pompoenpit)</li>
            <li>12 g vetten (7 g MCT, 5 g lijnzaad)</li>
            <li>50 g koolhydraten (30 g isomaltulose, 8 g dadelpoeder, 5 g inuline, 3 g psyllium, 2 g glucomannan)</li>
            <li>5.2 g creatine monohydraat (Creapure)</li>
            <li>5 g essentiële aminozuren (EAA's)</li>
            <li>Adaptogenen: Lion’s Mane, Cordyceps</li>
            <li>Nucleotiden: Uridine, Thymidine, Inosine</li>
            <li>Volledig vitamine B-complex (actieve vormen)</li>
            <li>Vitamine D3 (4000 IU), K2 (200 mcg), C (250 mg)</li>
            <li>Probiotica: L. reuteri, L. rhamnosus GG, B. lactis</li>
            <li>Smaak: blauwe bes, vanille, monkfruit, Keltisch zout</li>
            <li>Gebruik: 120 g + 420 ml water, shaken 30-45 sec</li>
          </ul>
        </div>
      </section>

      <footer className="bg-[#111] py-10 text-center text-xs text-gray-400">
        <p>© 2025 Ops Fuel. All rights reserved.</p>
      </footer>
    </main>
  );
}