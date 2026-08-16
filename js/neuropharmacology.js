const psychostimulantTopics = [
  {
    number: '6.3.1',
    name: 'Cocaine',
    sections: {
      overview: `
        <p>Cocaine is a powerful psychostimulant and naturally occurring alkaloid derived from the coca plant. It increases activity within the central nervous system and can produce increased alertness, energy, arousal, and euphoria.</p>
        <p>Coca plants are native to western South America, particularly the Andean region. Their leaves contain a relatively low concentration of cocaine alkaloid, and producing purified cocaine involves multiple extraction and purification stages.</p>
        <p>Cocaine can also act as a topical local anaesthetic. By blocking voltage-gated sodium channels in peripheral nerves, it temporarily interrupts the transmission of pain, touch, and other sensory signals.</p>
        <p><strong>Historical note:</strong> Sigmund Freud wrote about cocaine's physiological and potential therapeutic effects, but ophthalmologist Carl Koller is credited with demonstrating its usefulness as a local anaesthetic for the eye in 1884.</p>
      `,
      mechanism: `
        <p>Cocaine primarily blocks monoamine transporters, particularly the dopamine transporter (DAT), norepinephrine transporter (NET), and serotonin transporter (SERT). This prevents these neurotransmitters from being efficiently removed from the synaptic cleft, increasing their extracellular concentrations and prolonging their effects on postsynaptic receptors.</p>
        <p>Increased dopamine signalling, particularly within mesolimbic reward circuits, contributes to cocaine's reinforcing and euphoric effects. Its separate blockade of voltage-gated sodium channels accounts for its local-anaesthetic action.</p>
      `,
      effects: `
        <p>Increased dopamine and norepinephrine signalling can produce increased alertness, energy, attention, arousal, and euphoria. Increased sympathetic activity can elevate heart rate, blood pressure, and body temperature while producing vasoconstriction.</p>
        <p>Cocaine can also reduce appetite and fatigue and promote wakefulness. As its acute effects wear off, fatigue, low mood, irritability, and reduced motivation may occur. Repeated exposure can produce tolerance, dependence, and substance use disorder.</p>
      `,
      pharmacokinetics: `
        <p>Cocaine is rapidly metabolized, primarily in the liver and blood, into metabolites including benzoylecgonine. Its elimination half-life is commonly estimated at approximately 0.7&ndash;1.5 hours, although route of administration, dose, and individual physiology can alter its time course.</p>
        <p>Medically, cocaine has limited use as a topical local anaesthetic in certain ear, nose, and throat procedures because it blocks sodium channels and causes local vasoconstriction. Non-medical exposure carries substantial cardiovascular, neurological, and dependence-related risks.</p>
        <p><strong>Powdered cocaine</strong> may be insufflated and absorbed through the nasal mucosa. <strong>Crack cocaine</strong> is a processed, rock-like form that can be smoked, producing a faster onset and shorter-lived peak effect.</p>
      `
    }
  },
  {
    number: '6.3.2',
    name: 'Amphetamines',
    sections: {
      overview: `
        <p>Amphetamine is a synthetic psychostimulant that increases activity within the central nervous system, particularly through its effects on dopamine and norepinephrine signalling. It can increase alertness, attention, energy, and wakefulness while reducing fatigue and appetite.</p>
      `,
      mechanism: `
        <p>Amphetamine enters presynaptic neurons primarily through dopamine and norepinephrine transporters (DAT and NET). Inside the neuron, it disrupts the normal storage and handling of monoamines, including through interactions with vesicular monoamine transporter 2 (VMAT2).</p>
        <p>This promotes the movement of dopamine and norepinephrine out of storage vesicles and into the cytoplasm while altering transporter activity so that these neurotransmitters are released into the synaptic cleft. At higher concentrations, amphetamine can also affect serotonin signalling and inhibit monoamine oxidase to a lesser extent.</p>
      `,
      effects: `
        <p>Like cocaine, amphetamines are sympathomimetics. They can increase alertness, attention, energy, motivation, and wakefulness while reducing appetite and fatigue. Dopamine activity in reward-related circuits can contribute to euphoria and reinforcement, while sympathetic activation can elevate heart rate, blood pressure, and body temperature.</p>
        <p>Amphetamines are also used to treat attention-deficit/hyperactivity disorder (ADHD). At therapeutic doses, increased dopamine and norepinephrine signalling in circuits involved in attention, executive function, and impulse control can improve attention and reduce impulsivity and hyperactivity.</p>
      `,
      pharmacokinetics: `
        <p>Amphetamine can be administered orally, absorbed through the gastrointestinal tract, distributed throughout the body, and transported across the blood-brain barrier. It is metabolized primarily in the liver and eliminated largely through the kidneys.</p>
        <p>Its relatively long duration of action compared with cocaine allows more sustained stimulant effects. Amphetamine is used medically to treat ADHD and narcolepsy. Excessive exposure can produce anxiety, agitation, insomnia, and other adverse effects, while repeated use can lead to tolerance and dependence.</p>
      `
    }
  },
  {
    number: '6.3.3',
    name: 'Methamphetamines',
    sections: {
      overview: `
        <p>Methamphetamine is a synthetic psychostimulant closely related to amphetamine. Structurally, it is amphetamine with an additional methyl group attached to its nitrogen atom. This modification increases lipid solubility, allowing it to cross the blood-brain barrier readily and enter the brain efficiently.</p>
      `,
      mechanism: `
        <p>Like amphetamine, methamphetamine enters presynaptic neurons through dopamine and norepinephrine transporters (DAT and NET) and alters the normal storage and transport of monoamines. It interacts with VMAT2, promoting the movement of dopamine and norepinephrine out of synaptic vesicles and into the cytoplasm.</p>
        <p>It also alters DAT and NET function, promoting the release of these neurotransmitters into the synaptic cleft. The resulting increase in extracellular dopamine and norepinephrine strongly stimulates their associated neural circuits.</p>
      `,
      effects: `
        <p>Methamphetamine can produce increased alertness, energy, wakefulness, attention, and euphoria, along with reduced appetite and fatigue. Its strong effects on dopamine reward circuits contribute to its high reinforcing potential. Increased sympathetic activity can elevate heart rate, blood pressure, and body temperature.</p>
      `,
      pharmacokinetics: `
        <p>Methamphetamine is well absorbed and readily crosses the blood-brain barrier because of its high lipid solubility. It is metabolized primarily in the liver and eliminated mainly through the kidneys.</p>
        <p>Its effects generally last considerably longer than those of cocaine, with a typical elimination half-life of roughly 9&ndash;12 hours, although this varies between people and circumstances. Methamphetamine has limited medical use in some jurisdictions, but therapeutic use is much more restricted than that of amphetamine. Repeated exposure can produce tolerance, dependence, substance use disorder, and significant cardiovascular and neurological risks.</p>
      `
    }
  },
  {
    number: '6.3.4',
    name: 'Methylphenidate',
    sections: {
      overview: `
        <p>Methylphenidate is a synthetic psychostimulant commonly used to treat ADHD and narcolepsy. Well-known formulations include Ritalin and Concerta. It primarily increases dopamine and norepinephrine signalling in circuits involved in attention, executive function, and arousal.</p>
      `,
      mechanism: `
        <p>Methylphenidate primarily blocks dopamine and norepinephrine transporters (DAT and NET), reducing the reuptake of these neurotransmitters into presynaptic neurons. This increases their concentration in the synaptic cleft and enhances signalling at postsynaptic receptors.</p>
        <p>Unlike amphetamine, methylphenidate primarily blocks reuptake rather than directly promoting neurotransmitter release.</p>
      `,
      effects: `
        <p>By increasing dopamine and norepinephrine signalling, methylphenidate can improve attention, concentration, and impulse control while reducing hyperactivity in people with ADHD. It can also increase alertness and wakefulness.</p>
        <p>Common adverse effects can include decreased appetite, difficulty sleeping, increased heart rate, and elevated blood pressure.</p>
      `,
      pharmacokinetics: `
        <p>Methylphenidate is available in immediate-release and extended-release formulations, allowing its effects to be maintained for different durations. It is metabolized primarily through de-esterification and its metabolites are eliminated mainly through the kidneys.</p>
        <p>Its principal medical uses are the treatment of ADHD and narcolepsy. Use requires clinical monitoring because dosing, duration, adverse effects, and misuse risk vary between formulations and individuals.</p>
      `
    }
  },
  {
    number: '6.3.5',
    name: 'MDMA',
    sections: {
      overview: `
        <p>3,4-Methylenedioxymethamphetamine (MDMA) is a synthetic psychoactive substance structurally related to amphetamine and methamphetamine. It produces stimulant and psychedelic-like effects, including increased energy, emotional openness, and altered perception.</p>
      `,
      mechanism: `
        <p>Unlike typical amphetamines, MDMA has particularly strong effects on serotonin signalling. It enters presynaptic neurons through serotonin, dopamine, and norepinephrine transporters (SERT, DAT, and NET) and promotes the release of these neurotransmitters.</p>
        <p>Its strongest effect is on serotonin, producing a large increase in extracellular serotonin. MDMA also interacts with VMAT2 and reverses monoamine-transporter activity, contributing to increased neurotransmitter release.</p>
      `,
      effects: `
        <p>MDMA can produce euphoria, increased energy, heightened sensory perception, emotional openness, and stronger feelings of social connection. It can also increase heart rate, blood pressure, and body temperature.</p>
        <p>After its effects subside, temporary fatigue, low mood, or altered sleep may occur as neurotransmitter systems recover.</p>
      `,
      pharmacokinetics: `
        <p>MDMA is generally well absorbed when taken orally and is metabolized primarily by the liver, with metabolites eliminated through the kidneys. Its effects typically last several hours.</p>
        <p>Risks include elevated body temperature, cardiovascular stress, dehydration or electrolyte disturbances, and dangerous interactions with other substances that increase serotonin signalling. Repeated exposure may also produce tolerance and other longer-term effects.</p>
      `
    }
  },
  {
    number: '6.3.6',
    name: 'Caffeine',
    sections: {
      overview: `
        <p>Caffeine is a naturally occurring central nervous system stimulant found in coffee, tea, cacao, and many other plants. It is one of the world's most widely consumed psychoactive substances and is commonly used to increase alertness and reduce fatigue.</p>
      `,
      mechanism: `
        <p>Unlike amphetamines and cocaine, caffeine does not primarily increase dopamine by directly promoting its release or blocking its reuptake. Instead, it acts as an adenosine-receptor antagonist, particularly at A<sub>1</sub> and A<sub>2A</sub> receptors.</p>
        <p>By blocking adenosine signalling, caffeine reduces adenosine's normal inhibitory and sleep-promoting effects, indirectly increasing neural activity and promoting wakefulness.</p>
      `,
      effects: `
        <p>Caffeine can increase alertness, attention, and wakefulness while reducing perceived fatigue and sleepiness. It can also increase heart rate and produce mild increases in blood pressure.</p>
        <p>Excessive consumption can cause restlessness, anxiety, insomnia, and tremors.</p>
      `,
      pharmacokinetics: `
        <p>Caffeine is rapidly absorbed through the gastrointestinal tract and readily crosses the blood-brain barrier. It is metabolized primarily in the liver, particularly by CYP1A2, and its metabolites are eliminated through the kidneys. Its effects typically persist for several hours.</p>
        <p>Regular use can produce tolerance and physical dependence. Abrupt reduction after sustained use can cause withdrawal symptoms such as headache, fatigue, and irritability.</p>
      `
    }
  }
];

const neuropharmacologyCategories = {
  psychostimulants: psychostimulantTopics,
  opioids: [
    'Morphine',
    'Heroin',
    'Fentanyl',
    'Oxycodone',
    'Codeine',
    'Naloxone'
  ],
  psychedelics: ['LSD', 'Psilocybin', 'DMT', 'Mescaline'],
  cannabis: ['THC', 'CBD'],
  'depressants-anxiolytics': [
    'Benzodiazepines',
    'Barbiturates',
    'GHB',
    'Alcohol',
    'Z-drugs'
  ],
  antidepressants: ['SSRIs', 'SNRIs', 'TCAs', 'MAOIs'],
  antipsychotics: ['Typical antipsychotics', 'Atypical antipsychotics']
};

const drugInformationSections = [
  { key: 'overview', title: 'Overview' },
  { key: 'mechanism', title: 'Mechanism of Action' },
  { key: 'effects', title: 'Effects' },
  { key: 'pharmacokinetics', title: 'Pharmacokinetics, Uses &amp; Risks' }
];

const normalizeTopic = (topic) => typeof topic === 'string'
  ? { name: topic, sections: {} }
  : topic;

const createTopicId = (categoryKey, topicName) => {
  const topicSlug = topicName
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `${categoryKey}-${topicSlug}`;
};

const buildDrugPanelContent = (topic) => {
  const panelTitle = topic.number
    ? `${topic.number} ${topic.name}`
    : topic.name;

  return `
    <div class="drug-topic-panel__inner">
      <div class="drug-topic-panel__heading">
        <p class="drug-topic-panel__eyebrow">Reference outline</p>
        <h4>${panelTitle}</h4>
      </div>
      <div class="drug-topic-panel__sections">
        ${drugInformationSections.map(({ key, title }, index) => `
          <section>
            <h5>${index + 1}. ${title}</h5>
            ${topic.sections[key] || '<p>Scientific content for this section will be added later.</p>'}
          </section>
        `).join('')}
      </div>
    </div>
  `;
};

const initializeNeuropharmacologyBrowser = () => {
  const browser = document.querySelector('[data-pharmacology-browser]');

  if(!browser){
    return;
  }

  browser.querySelectorAll('[data-pharmacology-category]').forEach((category) => {
    const categoryKey = category.dataset.pharmacologyCategory;
    const topics = neuropharmacologyCategories[categoryKey];
    const topicRow = category.querySelector('[data-drug-topic-row]');
    const panel = category.querySelector('[data-drug-topic-panel]');

    if(!topics || !topicRow || !panel){
      return;
    }

    const panelId = `${categoryKey}-information-panel`;
    let activeButton = null;
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-live', 'polite');

    topics.map(normalizeTopic).forEach((topic) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'drug-topic-button';
      button.id = `${createTopicId(categoryKey, topic.name)}-button`;
      button.textContent = topic.name;
      button.setAttribute('aria-controls', panelId);
      button.setAttribute('aria-expanded', 'false');

      button.addEventListener('click', () => {
        const isCurrentTopic = activeButton === button;

        if(activeButton){
          activeButton.classList.remove('is-active');
          activeButton.setAttribute('aria-expanded', 'false');
        }

        if(isCurrentTopic){
          activeButton = null;
          panel.classList.remove('is-open');
          panel.setAttribute('aria-hidden', 'true');
          panel.removeAttribute('aria-labelledby');
          return;
        }

        activeButton = button;
        button.classList.add('is-active');
        button.setAttribute('aria-expanded', 'true');
        panel.innerHTML = buildDrugPanelContent(topic);
        panel.classList.remove('is-refreshing');
        void panel.offsetWidth;
        panel.classList.add('is-open', 'is-refreshing');
        panel.setAttribute('aria-hidden', 'false');
        panel.setAttribute('aria-labelledby', button.id);
      });

      topicRow.appendChild(button);
    });
  });
};

document.addEventListener('DOMContentLoaded', initializeNeuropharmacologyBrowser);
