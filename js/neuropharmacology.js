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

const opioidTopics = [
  {
    number: '6.4.1',
    name: 'Morphine',
    sections: {
      overview: `
        <p>Morphine is a naturally occurring opioid derived from the opium poppy (Papaver somniferum) and is one of the oldest and most widely studied opioid analgesics. It is primarily used to treat moderate to severe pain and serves as a reference drug for understanding the effects of other opioids.</p>
      `,
      mechanism: `
        <p>Morphine acts primarily as an agonist at &mu;-opioid (mu-opioid) receptors, which are widely distributed throughout the brain, spinal cord, and peripheral nervous system. Activation of these G-protein-coupled receptors reduces neuronal excitability and neurotransmitter release, including by inhibiting voltage-gated calcium channels and increasing potassium conductance.</p>
        <p>In pain pathways, this reduces the transmission and perception of pain signals. Activation of opioid receptors in reward-related circuits can also increase dopamine signaling, contributing to morphine's reinforcing effects.</p>
      `,
      effects: `
        <p>Morphine produces analgesia (pain relief), sedation, and feelings of relaxation or euphoria. It can also cause respiratory depression, drowsiness, nausea, constipation, and slowed gastrointestinal activity. Repeated exposure can produce tolerance and physical dependence, while excessive doses can cause severe respiratory depression and potentially fatal overdose.</p>
      `,
      pharmacokinetics: `
        <p>Morphine can be administered through several routes and is metabolized primarily in the liver, with its metabolites eliminated mainly through the kidneys. It is used medically for moderate to severe acute and chronic pain, including pain associated with surgery and serious illness. Its major risks include respiratory depression, tolerance, dependence, and opioid use disorder.</p>
      `
    }
  },
  {
    number: '6.4.2',
    name: 'Heroin',
    sections: {
      overview: `
        <p>Heroin (diacetylmorphine) is a semi-synthetic opioid derived from morphine. Its two acetyl groups make it more lipid-soluble than morphine, allowing it to cross the blood-brain barrier rapidly.</p>
        <p>Once in the brain and other tissues, heroin is rapidly converted into 6-monoacetylmorphine (6-MAM) and then morphine, which produces most of its opioid effects. Heroin produces powerful analgesic and euphoric effects and has a high potential for dependence.</p>
      `,
      mechanism: `
        <p>6-MAM and morphine primarily activate &mu;-opioid receptors, reducing neuronal activity and neurotransmitter release. In reward circuits, &mu;-opioid receptor activation can inhibit GABAergic interneurons in the VTA, disinhibiting dopamine neurons and increasing dopamine signaling, contributing to euphoria and reinforcement.</p>
      `,
      effects: `
        <p>Heroin can produce intense euphoria, relaxation, sedation, and pain relief. It can also cause drowsiness, nausea, constipation, and respiratory depression. Because of its rapid entry into the brain and strong reinforcing effects, repeated use can quickly lead to tolerance and physical dependence.</p>
      `,
      pharmacokinetics: `
        <p>Heroin is rapidly converted to active metabolites, with 6-MAM being an important intermediate before conversion to morphine. Its rapid onset contributes to its strong reinforcing effects. Unlike morphine, heroin has no accepted routine medical use in Canada or the United States. Its major risk is respiratory depression, particularly when combined with other CNS depressants, and overdose can be fatal. Naloxone can rapidly reverse opioid-induced respiratory depression.</p>
      `
    }
  },
  {
    number: '6.4.3',
    name: 'Codeine',
    sections: {
      overview: `
        <p>Codeine is a naturally occurring opioid found in the opium poppy and is also produced semi-synthetically. It is generally less potent than morphine and is commonly used for mild to moderate pain and, in some formulations, to suppress coughing. Codeine is commonly found in combination products such as Tylenol with Codeine.</p>
        <p>Lean, a recreational drink associated with codeine-containing cough syrup (Typically Wockhardt), can produce opioid effects and carries risks of dependence and overdose.</p>
      `,
      mechanism: `
        <p>Codeine acts through &mu;-opioid receptors, but much of its analgesic effect comes from conversion into morphine by the liver enzyme CYP2D6. Morphine then activates &mu;-opioid receptors, reducing neuronal excitability and neurotransmitter release in pain pathways.</p>
        <p>In reward circuits, opioid receptor activation can also inhibit GABAergic interneurons in the VTA, disinhibiting dopamine neurons and increasing dopamine signaling.</p>
      `,
      effects: `
        <p>Codeine can produce pain relief, sedation, relaxation, and euphoria, as well as drowsiness, nausea, constipation, and respiratory depression. Because its effects depend partly on conversion to morphine, individuals can experience different effects depending on their CYP2D6 activity. Repeated use can produce tolerance, physical dependence, and opioid use disorder.</p>
      `,
      pharmacokinetics: `
        <p>Codeine is generally administered orally and metabolized in the liver, with CYP2D6 converting a portion into morphine. The resulting metabolites are primarily eliminated through the kidneys.</p>
        <p>It is used medically for pain and cough, although its use varies by country and age group because of safety concerns. Excessive exposure can cause dangerous respiratory depression, particularly when combined with other CNS depressants.</p>
      `
    }
  },
  {
    number: '6.4.4',
    name: 'Fentanyl',
    sections: {
      overview: `
        <p>Fentanyl is a synthetic opioid that is substantially more potent than morphine and is used medically for severe pain and anesthesia. It acts primarily at &mu;-opioid receptors and can produce powerful analgesia, sedation, and euphoria.</p>
        <p>Carfentanil is a related synthetic opioid that is far more potent than fentanyl and is used primarily as a veterinary tranquilizer for very large animals.</p>
      `,
      mechanism: `
        <p>Fentanyl acts primarily as a &mu;-opioid receptor agonist. Activation of these G-protein-coupled receptors reduces neuronal excitability and neurotransmitter release, including by inhibiting voltage-gated calcium channels and increasing potassium conductance. In pain pathways, this suppresses the transmission and perception of pain. In reward circuits, &mu;-opioid receptor activation can inhibit GABAergic interneurons in the VTA, disinhibiting dopamine neurons and increasing dopamine signaling, contributing to reward and reinforcement.</p>
      `,
      effects: `
        <p>Fentanyl produces powerful analgesia, sedation, relaxation, and euphoria, while also causing respiratory depression, drowsiness, nausea, and constipation. Its effects on the brainstem respiratory centers can significantly reduce the drive to breathe.</p>
      `,
      pharmacokinetics: `
        <p>Fentanyl is highly lipid-soluble, allowing it to cross the blood-brain barrier rapidly. It is metabolized primarily in the liver, largely through CYP3A4, and its metabolites are eliminated mainly through the kidneys. Illicitly manufactured fentanyl is also a major contributor to opioid-related overdoses because it can be mixed into other drugs without the user's knowledge.</p>
        <p>Because fentanyl is highly potent, the difference between an effective dose and a dangerous dose can be relatively small, making accidental overdose a major risk. Carfentanil produces similar opioid effects but is far more potent, making exposure particularly dangerous.Naloxone can reverse fentanyl's opioid effects, although multiple doses may sometimes be required.</p>
      `
    }
  },
  {
    number: '6.4.5',
    name: 'Oxycodone',
    sections: {
      overview: `
        <p>Oxycodone is a semi-synthetic opioid derived from thebaine, an alkaloid found in the opium poppy. It is primarily used to treat moderate to severe pain and is commonly sold as OxyContin or in combination with acetaminophen as Percocet.</p>
      `,
      mechanism: `
        <p>Oxycodone acts primarily as an agonist at &mu;-opioid receptors, reducing neuronal excitability and neurotransmitter release in pain pathways. Like other &mu;-opioid agonists, it can also inhibit GABAergic interneurons in the VTA, disinhibiting dopamine neurons and increasing dopamine signaling in reward circuits.</p>
      `,
      effects: `
        <p>Oxycodone produces pain relief, sedation, relaxation, and euphoria, along with possible drowsiness, nausea, constipation, and respiratory depression. Its effects on reward circuits contribute to its reinforcing properties. Repeated exposure can produce tolerance, physical dependence, and opioid use disorder.</p>
      `,
      pharmacokinetics: `
        <p>Oxycodone is well absorbed when taken orally and is metabolized primarily in the liver, with metabolites eliminated through the kidneys. Extended-release formulations such as OxyContin are designed to release the drug over a longer period. It is an effective prescription analgesic, but excessive exposure can cause dangerous respiratory depression and overdose.</p>
      `
    }
  },
  {
    number: '6.4.6',
    name: 'Methadone',
    sections: {
      overview: `
        <p>Methadone is a synthetic opioid used primarily for pain management and the treatment of opioid use disorder. Unlike shorter-acting opioids, methadone has a relatively long duration of action, making it useful for preventing withdrawal symptoms and reducing opioid cravings.</p>
      `,
      mechanism: `
        <p>Methadone acts primarily as a &mu;-opioid receptor agonist, producing analgesia and reducing opioid withdrawal symptoms. It also acts as an NMDA receptor antagonist and affects serotonin and norepinephrine signaling, although its opioid-receptor activity is primarily responsible for its major clinical effects.</p>
      `,
      effects: `
        <p>Methadone can produce analgesia, sedation, relaxation, and euphoria, although its effects differ depending on dose, tolerance, and whether it is being used therapeutically. In opioid-use-disorder treatment, maintaining stable opioid receptor activation can reduce withdrawal symptoms and cravings without producing the rapid fluctuations associated with shorter-acting opioids.</p>
      `,
      pharmacokinetics: `
        <p>Methadone is well absorbed orally and has a long and variable half-life, allowing once-daily dosing in many treatment settings. its long duration makes it useful for opioid-use-disorder treatment, but it also means that the drug can accumulate with repeated dosing.</p>
        <p>In opioid-use-disorder treatment, it is administered at a dose and schedule designed to maintain stable opioid receptor activation, suppressing withdrawal and cravings without producing the rapid, intense euphoria associated with shorter-acting opioids.</p>
      `
    }
  },
  {
    number: '6.4.7',
    name: 'Naloxone',
    sections: {
      overview: `
        <p>Naloxone is an opioid receptor antagonist used to rapidly reverse opioid-induced respiratory depression. Unlike morphine, heroin, fentanyl, and other opioids, naloxone does not activate opioid receptors; instead, it blocks them.</p>
        <p>It is commonly known by the brand name Narcan.</p>
      `,
      mechanism: `
        <p>Naloxone binds strongly to &mu;-opioid receptors, preventing opioid agonists such as fentanyl, heroin, and morphine from activating them. By competitively displacing opioids from these receptors, naloxone rapidly restores normal activity in neural circuits controlling respiration. Its high affinity for &mu;-opioid receptors allows it to reverse opioid effects even when a large amount of an opioid is present.</p>
      `,
      effects: `
        <p>Naloxone can rapidly reverse respiratory depression, sedation, and other opioid effects. Because it blocks opioid receptors rather than activating them, it does not produce typical opioid effects.</p>
      `,
      pharmacokinetics: `
        <p>Naloxone has a relatively short duration of action compared with some opioids, meaning additional doses may sometimes be required, particularly with long-lasting or highly potent opioids such as fentanyl. It is commonly administered as a nasal spray (Narcan) or by injection.</p>
      `
    }
  }
];

const cannabisTopics = [
  {
    number: '6.5.1',
    name: 'Endocannabinoid System',
    informationSections: ['overview', 'mechanism'],
    sections: {
      overview: `
        <p>The endocannabinoid system is a signaling system throughout the brain and body that helps regulate mood, appetite, memory, pain, stress, and other physiological processes. It consists primarily of cannabinoid receptors, naturally occurring endocannabinoids, and the enzymes that produce and break them down.</p>
      `,
      mechanism: `
        <p>The two main cannabinoid receptors are CB1 and CB2. CB1 receptors are especially abundant in the CNS, while CB2 receptors are more prominent in immune tissues. The body's main endocannabinoids include anandamide and 2-AG, which are produced on demand and generally act as retrograde messengers: they travel from the postsynaptic neuron back to the presynaptic terminal and reduce neurotransmitter release.</p>
        <p>By regulating neurotransmitter release, the endocannabinoid system can influence pain perception, appetite, mood, memory, stress responses, and reward. Its effects depend heavily on which receptors and neural circuits are activated.</p>
        <p><strong>Simple Breakdown:</strong></p>
        <ul>
          <li>Normally, inhibitory neurotransmitters limit the activity of dopamine neurons, reducing dopamine release.</li>
          <li>Anandamide, one of the body's natural cannabinoids, binds to cannabinoid receptors on inhibitory neurons and reduces their release of inhibitory neurotransmitters. This disinhibits the dopamine neuron, allowing it to become more active.</li>
          <li>THC can mimic some of anandamide's actions by activating cannabinoid receptors, reducing inhibitory signaling and allowing greater dopamine neuron activity. This contributes to some of the reward and euphoric effects associated with cannabis.</li>
        </ul>
        <figure class="drug-topic-panel__figure drug-topic-panel__figure--wide">
          <img src="../assets/images/endocannabinoid-system.jpg" alt="Diagram comparing inhibitory neurotransmission with the effects of anandamide and THC on dopamine release">
        </figure>
      `
    }
  },
  {
    number: '6.5.2',
    name: 'THC (Δ9-Tetrahydrocannabinol)',
    sections: {
      overview: `
        <p>THC is the primary intoxicating cannabinoid in cannabis and is responsible for many of its characteristic psychoactive effects. It partially mimics the body's endogenous cannabinoids by activating cannabinoid receptors, particularly CB1 receptors in the brain.</p>
      `,
      mechanism: `
        <p>THC acts primarily as a partial agonist at CB1 and CB2 receptors. CB1 receptors are commonly located on presynaptic terminals, where their activation reduces neurotransmitter release. In some reward circuits, THC activates CB1 receptors on GABAergic inhibitory terminals, reducing GABA release and thereby disinhibiting dopamine neurons, increasing dopamine signaling and contributing to reward and euphoria.</p>
      `,
      effects: `
        <p>THC can produce euphoria, relaxation, altered perception, increased appetite, impaired short-term memory, and changes in attention and coordination. It can also produce anxiety or paranoia in some individuals, particularly at higher exposures.</p>
      `,
      pharmacokinetics: `
        <p>THC is highly lipid-soluble and can accumulate in fatty tissues, contributing to its relatively long persistence in the body. It is metabolized primarily in the liver and produces active and inactive metabolites. Cannabis containing THC has medical applications including pain management, nausea, appetite stimulation, and certain neurological conditions.</p>
        <p><strong>NOTE:</strong> Despite widespread belief, regular exposure to THC can lead to tolerance, physical dependence, and cannabis use disorder (CUD). Although cannabis has a lower addiction potential than many substances such as opioids, a subset of people who use cannabis develop problematic use characterized by difficulty controlling consumption despite negative consequences.</p>
      `
    }
  },
  {
    number: '6.5.3',
    name: 'CBD (Cannabidiol)',
    sections: {
      overview: `
        <p>CBD is a major cannabinoid found in cannabis but, unlike THC, it is not strongly intoxicating and does not produce the typical cannabis "high." It has a complex pharmacological profile involving multiple receptors and signaling systems.</p>
      `,
      mechanism: `
        <p>CBD does not act as a strong agonist at CB1 or CB2 receptors like THC. Instead, it can modulate cannabinoid signaling and interact with numerous other molecular targets, including serotonin receptors and ion channels. Its precise mechanisms vary depending on the biological system and effect being studied.</p>
        <p>Proposed targets include 5-HT1A serotonin receptors and TRPV1 ion channels, along with indirect effects on endocannabinoid signaling. No single mechanism currently explains all of CBD's reported effects.</p>
      `,
      effects: `
        <p>CBD does not typically produce the strong euphoria or perceptual changes associated with THC. It has been investigated for effects on anxiety, pain, inflammation, and seizure activity, although its effects vary substantially depending on the condition and dose.</p>
        <p>Clinical evidence is strongest for antiseizure effects in specific epilepsy syndromes; evidence for other proposed uses remains more variable and should not be treated as equivalent to an approved indication.</p>
      `,
      pharmacokinetics: `
        <p>CBD is absorbed through several routes and is extensively metabolized in the liver, where it can affect the activity of certain drug-metabolizing enzymes. A purified form of CBD is medically used for certain epilepsy disorders. CBD is generally well tolerated, but can cause side effects such as drowsiness, gastrointestinal effects, and drug interactions, particularly at higher doses.</p>
        <p>Prescription cannabidiol is used for seizures associated with Lennox-Gastaut syndrome, Dravet syndrome, and tuberous sclerosis complex. Important risks include sedation, diarrhea, reduced appetite, liver-enzyme elevations, and interactions with medications metabolized through pathways including CYP2C19. Product formulation, dose, route of administration, and food intake can substantially affect exposure.</p>
      `
    }
  }
];

const psychedelicTopics = [
  {
    number: '6.6.1',
    name: 'LSD (Acid)',
    sections: {
      overview: `
        <p>LSD (lysergic acid diethylamide) is a powerful synthetic psychedelic and one of the most potent classic psychedelics known. Commonly called acid, it can produce profound changes in sensory perception, thought, mood, and the experience of time and self.</p>
        <p>Its psychoactive doses are measured in micrograms, reflecting its exceptionally high potency. The intensity and character of an experience can vary considerably with dose, individual sensitivity, expectations, and environment.</p>
      `,
      mechanism: `
        <p>LSD acts primarily as a partial agonist at serotonin 5-HT2A receptors. Activation of these receptors, particularly in the cerebral cortex, alters the activity and communication of neural circuits involved in perception, cognition, and sensory processing. LSD also activates dopamine D2 receptors, which may contribute to some of its effects on cognition and perception.</p>
        <p>5-HT2A receptor activation on cortical neurons changes excitatory and glutamatergic signalling and alters communication between large-scale brain networks. Human studies using the 5-HT2A antagonist ketanserin show that blocking these receptors can markedly reduce LSD's acute psychedelic effects, supporting their central role. LSD also binds to several other serotonin and dopamine receptor subtypes, although their individual contributions are less clearly established.</p>
      `,
      effects: `
        <p>LSD can produce visual and sensory distortions, altered perception of time, intensified emotions, changes in thought patterns, and an altered sense of self. Some individuals may experience anxiety, panic, or paranoia, particularly during an unpleasant experience.</p>
        <p>Physical effects can include dilated pupils, increased heart rate and blood pressure, mild increases in body temperature, nausea, tremor, and reduced appetite. The psychological response is strongly influenced by dose and context, and impaired judgment during an intense experience can increase the risk of accidents or unsafe behaviour.</p>
      `,
      pharmacokinetics: `
        <p>LSD is absorbed primarily through the gastrointestinal tract and readily crosses the blood-brain barrier. It has a relatively long duration of action, with effects commonly lasting 8-12 hours or longer depending on the dose and individual. LSD produces little physical dependence, although tolerance develops rapidly with repeated exposure. Its major risks are psychological, including acute anxiety, panic, impaired judgment, and rare persistent perceptual disturbances.</p>
        <p>After oral administration, effects commonly begin within approximately 30-60 minutes, peak during the first several hours, and then gradually decline. Controlled studies show that duration increases with dose and can vary substantially between individuals. LSD is metabolized into several compounds and eliminated gradually even as its subjective effects diminish.</p>
        <p>LSD is being investigated in controlled clinical research for possible applications in conditions including anxiety, depression, and substance use disorders, but these uses remain investigational. Rare but important risks include prolonged psychological distress, the precipitation or worsening of psychotic or manic symptoms in susceptible individuals, and hallucinogen-persisting perception disorder.</p>
      `
    }
  },
  {
    number: '6.6.2',
    name: 'Psilocybin (Magic Mushrooms)',
    sections: {
      overview: `
        <p>Psilocybin is a naturally occurring psychedelic compound found in certain species of fungi, commonly known as magic mushrooms. Psilocybin is a prodrug, meaning it is converted in the body into the compound primarily responsible for the effects.</p>
        <p>The active compound is psilocin. Different mushroom species and individual specimens can contain substantially different amounts of psilocybin and related tryptamines, which contributes to variability in potency and effects.</p>
      `,
      mechanism: `
        <p>After psilocybin is converted into psilocin, psilocin binds to and partially activates 5-HT2A serotonin receptors, which are particularly abundant on excitatory neurons in the cerebral cortex. Activation of these receptors increases neuronal excitability and alters the normal pattern of glutamate release and cortical signaling. This disrupts the usual coordination between brain networks.</p>
        <p>Human PET studies show that the intensity of the psychedelic experience tracks both plasma psilocin concentration and cortical 5-HT2A receptor occupancy. At the circuit level, psilocin changes communication within the default mode, sensory, attention, and frontoparietal networks. It can reduce the usual separation between networks while changing the integrity of activity within them, allowing sensory, emotional, and internally generated information to interact in less constrained patterns.</p>
      `,
      effects: `
        <p>Psilocybin can produce visual and sensory distortions, altered perception of time, intensified emotions, changes in thought patterns, and an altered sense of self. Some individuals may experience anxiety, panic, or paranoia, particularly during an unpleasant experience.</p>
        <p>Physical effects can include dilated pupils, nausea, dizziness, headache, and temporary increases in heart rate or blood pressure. The psychological response is strongly shaped by dose, expectations, mental state, and environment.</p>
      `,
      pharmacokinetics: `
        <p>After ingestion, psilocybin is rapidly converted into psilocin, which crosses the blood-brain barrier and produces the primary psychoactive effects. Effects typically begin within 20–60 minutes and last several hours. Its major risks include acute psychological distress, impaired judgment, and accidents. Psilocybin is being actively researched for potential therapeutic applications, particularly for depression, anxiety, and substance use disorders.</p>
        <p>Controlled studies report that plasma psilocin commonly reaches its maximum concentration at approximately two hours, with an elimination half-life of roughly 1.5–2 hours and an average subjective duration of about 5–6 hours. Psilocin is subsequently metabolized, including through glucuronidation, before its metabolites are eliminated.</p>
        <p>Therapeutic research uses carefully screened participants, controlled dosing, psychological preparation, monitoring, and follow-up; those findings do not establish unsupervised use as a treatment. Physical dependence appears limited, but acute panic, risky behaviour, and the precipitation of manic or psychotic symptoms remain important concerns for susceptible individuals.</p>
      `
    }
  },
  {
    number: '6.6.3',
    name: 'DMT (N,N-Dimethyltryptamine)',
    sections: {
      overview: `
        <p>DMT (N,N-dimethyltryptamine) is a naturally occurring psychedelic tryptamine found in numerous plants and also produced in trace amounts in mammals. It produces an extremely intense but relatively short-lived psychedelic experience, with profound changes in perception, thought, and consciousness.</p>
        <p>DMT is structurally related to serotonin and the active psilocybin metabolite psilocin. Its route of administration strongly affects its onset and duration because DMT is normally broken down very rapidly.</p>
      `,
      mechanism: `
        <p>DMT acts primarily as a partial agonist at serotonin 5-HT2A receptors, altering signaling in cortical networks involved in perception and cognition. It also interacts with other serotonin receptors, including 5-HT1A, which may contribute to its distinct effects on mood and perception.</p>
        <p>At 5-HT2A receptors, DMT activates Gq/11-linked intracellular signalling, including phospholipase C pathways that change intracellular calcium and neuronal excitability. This alters the firing of cortical pyramidal neurons and communication among sensory, association, and self-processing networks. DMT also binds 5-HT2C receptors, and laboratory evidence suggests interactions with sigma-1 and trace-amine-associated receptors, although their contribution to the human psychedelic experience remains less certain.</p>
      `,
      effects: `
        <p>DMT can produce intense visual and sensory distortions, dramatic changes in the perception of time and space, altered self-awareness, and profound changes in consciousness. Experiences can be highly immersive and may include vivid imagery or a sense of encountering autonomous entities. Anxiety, confusion, or panic can also occur.</p>
        <p>Temporary physical effects can include dilated pupils, increased heart rate and blood pressure, dizziness, nausea, and impaired coordination. The rapid transition into an intense altered state can itself be disorienting and may increase the risk of panic or accidental injury.</p>
      `,
      pharmacokinetics: `
        <p>When inhaled, DMT is rapidly absorbed and crosses the blood-brain barrier, producing effects within minutes that typically last less than an hour. When taken orally, DMT is rapidly broken down by monoamine oxidase (MAO) and is therefore generally inactive on its own; combinations with MAO inhibitors can make it orally active. DMT has low physical dependence potential, but its intense psychological effects can lead to acute distress or impaired judgment.</p>
        <p>MAO-A in the gut, liver, and other tissues rapidly deaminates DMT, accounting for its brief action when inhaled or injected and its poor oral activity when taken alone. In preparations such as ayahuasca, beta-carboline compounds inhibit MAO-A, allowing oral DMT to reach systemic circulation and substantially extending the experience. Human pharmacokinetic studies confirm that blood concentrations rise and fall rapidly after intravenous administration.</p>
        <p>DMT and DMT-containing preparations are being studied experimentally, but no routine clinical indication has been established. Combining DMT with MAO inhibitors creates additional interaction risks with serotonergic or sympathomimetic substances and can prolong or intensify adverse reactions.</p>
      `
    }
  },
  {
    number: '6.6.4',
    name: '5-MeO-DMT',
    sections: {
      overview: `
        <p>5-MeO-DMT (5-methoxy-N,N-dimethyltryptamine) is a synthetic and naturally occurring tryptamine psychedelic closely related to DMT. The addition of a methoxy group (-OCH<sub>3</sub>) changes its pharmacological profile, producing effects that differ substantially from those of DMT.</p>
        <p>It occurs in several plants and in the defensive secretion of the Sonoran Desert toad, although research formulations can be synthesized without using animal-derived material.</p>
      `,
      mechanism: `
        <p>5-MeO-DMT acts strongly on serotonin receptors, particularly 5-HT1A and 5-HT2A. Compared with DMT, its relatively strong activity at 5-HT1A receptors contributes to a different pattern of neural signaling. Activation of these receptors alters serotonin-mediated signaling in cortical and other brain circuits involved in sensory processing, emotion, and self-awareness.</p>
        <p>5-HT1A receptors are primarily Gi/o-coupled: their activation lowers cyclic-AMP signalling, opens potassium channels, and can reduce neuronal firing. By contrast, 5-HT2A receptors are Gq/11-coupled and increase excitatory intracellular signalling. The balance between these receptor systems is thought to help explain why 5-MeO-DMT often produces less elaborate visual imagery than DMT while causing especially strong changes in self-processing and conscious awareness, although this relationship is still being studied.</p>
      `,
      effects: `
        <p>5-MeO-DMT can produce rapid and intense alterations in perception and consciousness, including profound changes in the sense of self and environment. Compared with DMT, visual effects may be less prominent while alterations in consciousness and sense of self can be particularly intense. Anxiety, confusion, and other difficult psychological reactions can occur.</p>
        <p>Possible physical effects include increased heart rate or blood pressure, tremor, nausea, vomiting, loss of coordination, and temporary reductions in responsiveness to the environment. Its abrupt onset can leave little time to adjust to the experience.</p>
      `,
      pharmacokinetics: `
        <p>5-MeO-DMT is rapidly absorbed and crosses the blood-brain barrier, producing a relatively rapid onset and shorter duration than LSD or psilocybin. It is metabolized primarily through enzymes including MAO-A and other pathways. Its intense and rapid effects can produce significant psychological distress or impaired judgment, and combining serotonergic substances can increase pharmacological risks.</p>
        <p>When vaporized, effects can begin within seconds and the main experience often resolves within approximately 30 minutes. MAO-A normally converts much of the compound into inactive 5-methoxyindoleacetic acid. A smaller CYP2D6-mediated pathway converts 5-MeO-DMT into bufotenine, an active metabolite with stronger 5-HT2A affinity.</p>
        <p>MAO inhibitors can substantially increase and prolong 5-MeO-DMT exposure while shifting more metabolism toward bufotenine. This makes combinations with MAO inhibitors or other serotonergic drugs particularly concerning because of the risk of severe toxicity, including serotonin toxicity. Clinical uses remain investigational.</p>
      `
    }
  },
  {
    number: '6.6.5',
    name: '2C-B',
    sections: {
      overview: `
        <p>2C-B (2,5-dimethoxy-4-bromophenethylamine) is a synthetic psychedelic phenethylamine developed by chemist Alexander Shulgin. It differs structurally from the tryptamine psychedelics such as DMT and psilocybin but can produce similar alterations in perception and consciousness.</p>
        <p>Its pharmacology and human pharmacokinetics are less thoroughly characterized than those of LSD or psilocybin. Reported experiences can combine psychedelic sensory changes with stimulating and emotionally intensifying effects.</p>
      `,
      mechanism: `
        <p>2C-B interacts with several serotonin receptors, including 5-HT2A, where it acts as a partial agonist. Activation of 5-HT2A receptors increases excitatory signaling in cortical neurons and alters the processing of sensory and cognitive information. Its interactions with other serotonin receptors contribute to its pharmacological profile, although 5-HT2A activation is considered central to its psychedelic effects.</p>
        <p>Laboratory studies also identify activity at 5-HT2B and 5-HT2C receptors. These receptors share Gq/11-coupled signalling that activates phospholipase C and changes intracellular calcium, but their distribution and functional roles differ. 2C-B has comparatively weak effects on serotonin and norepinephrine transporters, so it is not accurately described as simply releasing monoamines in the manner of amphetamine-type stimulants.</p>
      `,
      effects: `
        <p>2C-B can produce altered visual perception, intensified colours and patterns, changes in sensory experience, altered time perception, euphoria, and changes in thought patterns. Its effects can vary considerably depending on the individual and circumstances. Anxiety, confusion, or panic can occur during an unpleasant experience.</p>
        <p>Human studies also report stimulant-like effects and temporary increases in heart rate and blood pressure. Nausea, dizziness, restlessness, and impaired coordination can occur, and the response becomes less predictable as exposure increases.</p>
      `,
      pharmacokinetics: `
        <p>2C-B is generally active when taken orally and has a duration of several hours. It is metabolized primarily in the liver and eliminated through the body's normal metabolic and excretory pathways. It has relatively low physical dependence potential, but its effects can be unpredictable and may impair judgment and coordination.</p>
        <p>Available human studies show measurable cardiovascular and subjective effects beginning around the first hour and persisting for several hours, but its complete metabolic and elimination profile remains incompletely resolved. This uncertainty is important because products sold as 2C-B may also contain other substances or different concentrations than expected. It has no established routine medical use.</p>
      `
    }
  },
  {
    number: '6.6.6',
    name: 'Salvia (Salvia divinorum)',
    sections: {
      overview: `
        <p>Salvia divinorum is a plant containing salvinorin A, a powerful psychoactive compound that produces intense alterations in perception and consciousness. Unlike classic psychedelics such as LSD and psilocybin, salvinorin A does not primarily act through serotonin 5-HT2A receptors.</p>
        <p>Salvinorin A is a non-nitrogenous diterpene rather than a tryptamine, phenethylamine, or conventional opioid alkaloid. Its unusual chemistry matches its distinct receptor mechanism and subjective effects.</p>
      `,
      mechanism: `
        <p>Salvinorin A is a highly selective &kappa;-opioid receptor (KOR) agonist. KORs are G-protein-coupled receptors found throughout the brain and are involved in regulating sensory processing, mood, stress, and perception. Activating KORs alters neurotransmitter release and neuronal activity in several brain circuits, producing psychedelic-like alterations in consciousness through a mechanism fundamentally different from serotonergic psychedelics.</p>
        <p>KORs couple primarily to inhibitory Gi/o proteins. Their activation reduces adenylyl-cyclase and cyclic-AMP signalling, limits presynaptic calcium entry, activates potassium conductance, and suppresses neurotransmitter release. Salvinorin A can therefore alter signalling in cortical, thalamic, limbic, and striatal circuits involved in sensory integration, spatial orientation, motivation, and the sense of self. Laboratory studies find little meaningful activity at 5-HT2A receptors.</p>
      `,
      effects: `
        <p>Salvia can produce dramatic changes in perception, body awareness, spatial orientation, and consciousness. Users may experience intense visual distortions, altered sense of identity, unusual perceptions of movement or space, and significant confusion. The experience can be very intense but is generally much shorter than that produced by LSD or psilocybin.</p>
        <p>Dysphoria, fear, loss of environmental awareness, difficulty communicating, and marked impairment of balance or coordinated movement can occur. These effects make falls and accidental injuries a significant practical risk during the brief period of intoxication.</p>
      `,
      pharmacokinetics: `
        <p>Salvinorin A is rapidly absorbed when inhaled and crosses the blood-brain barrier, producing effects within minutes that generally subside relatively quickly. It is rapidly metabolized, contributing to its short duration of action. Salvia has relatively low potential for physical dependence, but its intense and unpredictable effects can lead to panic, confusion, impaired coordination, and accidental injury.</p>
        <p>Controlled inhalation research shows that plasma salvinorin A can peak at approximately two minutes and then decline rapidly alongside the subjective effects. Metabolism includes rapid deacetylation to less active compounds. No established medical indication exists, and evidence about repeated-use effects remains limited.</p>
      `
    }
  }
];

const depressantTopics = [
  {
    number: '6.7.1',
    name: 'Alcohol (Ethanol)',
    sections: {
      overview: `
        <p>Alcohol, specifically ethanol, is a widely used psychoactive substance that acts as a central nervous system depressant. It affects multiple neurotransmitter systems and can produce relaxation, reduced anxiety, impaired coordination, and changes in judgment and behavior.</p>
      `,
      mechanism: `
        <p>Ethanol affects several neurotransmitter systems, but two of its most important actions are enhancing inhibitory GABA-A signaling and inhibiting excitatory NMDA glutamate receptors. In the brain, this increased inhibition and reduced excitation suppresses activity across many neuronal populations, including cortical and hippocampal neurons, contributing to impaired judgment, coordination, and memory. Ethanol also inhibits GABAergic interneurons in the ventral tegmental area (VTA), reducing their inhibition of dopamine neurons. This disinhibits VTA dopamine neurons, increasing dopamine release in the nucleus accumbens and contributing to alcohol's rewarding and reinforcing effects.</p>
      `,
      effects: `
        <p>Acute alcohol exposure can produce relaxation, reduced anxiety, euphoria, impaired judgment, slowed reaction time, impaired coordination, and memory disruption. As blood alcohol concentration increases, increasing CNS depression can lead to confusion, loss of consciousness, and potentially life-threatening respiratory depression.</p>
      `,
      pharmacokinetics: `
        <p>Ethanol is rapidly absorbed through the gastrointestinal tract, particularly the small intestine, and readily crosses the blood-brain barrier because it is a small, water- and lipid-soluble molecule.</p>
        <p>It is metabolized primarily in the liver: alcohol dehydrogenase (ADH) converts ethanol to acetaldehyde, and aldehyde dehydrogenase (ALDH) subsequently converts acetaldehyde to acetate. Unlike many drugs, ethanol is primarily eliminated at a relatively constant rate rather than being eliminated proportionally faster as its concentration increases. Chronic exposure produces adaptations to inhibitory and excitatory signaling, contributing to tolerance and physical dependence. Abrupt cessation after prolonged heavy use can therefore produce dangerous withdrawal, including seizures and delirium.</p>
      `
    }
  },
  {
    number: '6.7.2',
    name: 'Benzodiazepines',
    sections: {
      overview: `
        <p>Benzodiazepines are a class of CNS depressant and anxiolytic drugs commonly used to treat anxiety, insomnia, seizures, muscle spasms, and acute agitation. Well-known examples include alprazolam (Xanax), diazepam (Valium), and lorazepam (Ativan).</p>
      `,
      mechanism: `
        <p>Benzodiazepines are positive allosteric modulators (binds to a receptor at a different site than the normal neurotransmitter and makes the receptor respond more strongly) of GABA-A receptors. They bind to a site on the GABA-A receptor between specific receptor subunits, separate from the site where GABA binds.</p>
        <p>When GABA binds to the receptor, the receptor opens its chloride (Cl<sup>−</sup>) channel. Benzodiazepines increase the frequency of channel opening, allowing more Cl<sup>−</sup> to enter the postsynaptic neuron. This makes the neuron less likely to reach the threshold required to generate an action potential, strengthening inhibitory signaling. In the amygdala and other limbic circuits, increased GABAergic inhibition reduces neuronal activity associated with fear and anxiety, while effects in cortical and motor circuits contribute to sedation and impaired coordination.</p>
      `,
      effects: `
        <p>Increased GABA-A signaling can produce reduced anxiety, sedation, muscle relaxation, impaired coordination, slowed reaction time, and anterograde amnesia. The intensity depends on the drug, dose, and individual's tolerance.</p>
      `,
      pharmacokinetics: `
        <p>Benzodiazepines are generally well absorbed and readily cross the blood-brain barrier because of their lipid solubility. They are metabolized primarily in the liver, although the specific metabolic pathways and half-lives vary considerably between drugs. Some, such as diazepam, form active metabolites that prolong their effects. Benzodiazepines are used medically for anxiety disorders, seizures, insomnia, muscle spasms, and acute agitation. Repeated exposure can produce tolerance and physical dependence. Abrupt discontinuation after prolonged use can cause severe withdrawal, including seizures, because the nervous system has adapted to chronic enhancement of GABAergic inhibition. Combining benzodiazepines with opioids or alcohol can produce dangerous levels of CNS and respiratory depression.</p>
      `
    }
  },
  {
    number: '6.7.3',
    name: 'Barbiturates',
    sections: {
      overview: `
        <p>Barbiturates are an older class of CNS depressants that were historically used as sedatives, anxiolytics, anesthetics, and anticonvulsants. Most have been replaced by safer medications, although some remain medically useful.</p>
      `,
      mechanism: `
        <p>Barbiturates act primarily on GABA-A receptors, but differently from benzodiazepines. They bind to distinct sites on the receptor and increase the duration for which its chloride channel remains open when GABA activates it. Greater Cl<sup>−</sup> influx hyperpolarizes neurons and makes them less likely to generate action potentials. At sufficiently high concentrations, barbiturates can also directly activate GABA-A receptors without GABA, producing much more profound CNS depression. This ability contributes to their narrow therapeutic window and greater overdose risk compared with benzodiazepines.</p>
      `,
      effects: `
        <p>Increased GABAergic inhibition throughout the CNS can produce sedation, relaxation, reduced anxiety, impaired coordination, drowsiness, and impaired cognition. As CNS depression increases, barbiturates can produce anesthesia, unconsciousness, and suppression of brainstem circuits controlling respiration and cardiovascular function.</p>
      `,
      pharmacokinetics: `
        <p>Barbiturates differ substantially in their onset, duration, lipid solubility, metabolism, and half-life. Highly lipid-soluble barbiturates rapidly cross the blood-brain barrier, producing rapid CNS effects. They are metabolized primarily by hepatic enzymes, with some inducing liver enzymes that increase the metabolism of other drugs. Some barbiturates remain useful for epilepsy and anesthesia. Their major risks include respiratory depression, overdose, tolerance, physical dependence, and severe withdrawal. Their relatively narrow therapeutic window makes excessive dosing particularly dangerous.</p>
      `
    }
  },
  {
    number: '6.7.4',
    name: 'Pregabalin (Lyrica)',
    sections: {
      overview: `
        <p>Pregabalin is a gabapentinoid used primarily to treat neuropathic pain and epilepsy and, in some countries, generalized anxiety disorder. Despite its structural similarity to GABA, pregabalin does not activate GABA receptors and instead reduces neurotransmitter release by acting on voltage-gated calcium channels.</p>
      `,
      mechanism: `
        <p>Pregabalin binds to the &alpha;<sub>2</sub>&delta; subunit of voltage-gated calcium channels (VGCCs) located on presynaptic nerve terminals. Normally, when an action potential reaches a presynaptic terminal, VGCCs open and allow Ca<sup>2+</sup> to enter the neuron. This calcium influx triggers synaptic vesicles to fuse with the presynaptic membrane and release neurotransmitters.</p>
        <p>By binding to the &alpha;<sub>2</sub>&delta; subunit, pregabalin reduces the functional activity of these channels and therefore reduces Ca<sup>2+</sup> entry during neuronal activation. This decreases the release of several excitatory neurotransmitters, including glutamate, norepinephrine, and substance P, reducing excessive neuronal signaling in pain and seizure circuits.</p>
      `,
      effects: `
        <p>Reduced excitatory neurotransmitter release can produce anxiolytic, anticonvulsant, analgesic, and CNS-depressant effects. Common effects include reduced anxiety, drowsiness, dizziness, blurred vision, and impaired coordination.</p>
      `,
      pharmacokinetics: `
        <p>Pregabalin is rapidly and well absorbed orally and reaches the CNS because it can cross the blood-brain barrier. Unlike many psychoactive drugs, it undergoes very little hepatic metabolism and is eliminated largely unchanged by the kidneys. Its elimination therefore depends strongly on renal function. Pregabalin is used for neuropathic pain, fibromyalgia, epilepsy, and generalized anxiety disorder in some jurisdictions. Repeated use can produce tolerance and physical dependence in some individuals, and abrupt discontinuation can cause withdrawal symptoms. Combining pregabalin with other CNS depressants, particularly opioids, can increase sedation and respiratory-depression risk.</p>
      `
    }
  }
];

const antidepressantTopics = [
  {
    number: '6.8.1',
    name: 'SSRIs (Selective Serotonin Reuptake Inhibitors)',
    sections: {
      overview: `
        <p>SSRIs are a class of antidepressants that primarily increase serotonin signaling in the brain. They are among the most commonly prescribed antidepressants and include fluoxetine (Prozac), sertraline (Zoloft), escitalopram (Lexapro), citalopram (Celexa), and paroxetine (Paxil).</p>
      `,
      mechanism: `
        <p>SSRIs selectively inhibit the serotonin transporter (SERT) on presynaptic neurons, which normally removes serotonin from the synaptic cleft and returns it to the presynaptic neuron. Blocking SERT initially increases serotonin availability in the synapse and increases stimulation of postsynaptic serotonin receptors. However, antidepressant effects typically take several weeks to develop because prolonged changes in serotonin signaling trigger downstream adaptations in neuronal receptors, gene expression, and neural circuits involved in mood regulation.</p>
        <p>Early in treatment, increased serotonin around cell bodies in the dorsal raphe activates inhibitory 5-HT1A autoreceptors, which can temporarily restrain the firing of serotonin neurons. With repeated SERT blockade, these autoreceptors become less responsive and raphe firing recovers, allowing a more sustained increase in serotonin release at terminal regions. Human PET studies have measured reduced raphe 5-HT1A autoreceptor binding after several weeks of SSRI treatment.</p>
        <p>Repeated serotonergic signalling is also associated with changes in CREB-regulated gene expression, BDNF-TrkB signalling, dendritic remodelling, and synaptic plasticity within prefrontal, hippocampal, amygdala, and stress-regulation circuits. These adaptations are contributing mechanisms rather than a single complete explanation for antidepressant response.</p>
      `,
      effects: `
        <p>SSRIs can reduce symptoms of depression and anxiety and are also commonly used to treat OCD, panic disorder, PTSD, and other conditions. Common side effects include nausea, gastrointestinal disturbances, sleep changes, and sexual dysfunction. Some people initially experience increased anxiety or restlessness before therapeutic effects develop.</p>
        <p>Increased serotonin at 5-HT3 receptors in the gastrointestinal system contributes to nausea and diarrhoea, while stimulation of 5-HT2 receptor pathways is one contributor to insomnia, agitation, and sexual dysfunction. Individual SSRIs differ in their additional receptor effects, so tolerability can vary despite their shared action at SERT.</p>
      `,
      pharmacokinetics: `
        <p>SSRIs are generally well absorbed orally and are metabolized primarily by hepatic enzymes, although their half-lives vary considerably between drugs. They are typically taken daily because maintaining relatively stable drug concentrations is important for sustained pharmacological effects. SSRIs are generally safer in overdose than older antidepressants, but combining serotonergic drugs can produce serotonin syndrome, a potentially dangerous state of excessive serotonin signaling. Abrupt discontinuation can also cause withdrawal-like symptoms with some SSRIs.</p>
        <p>Fluoxetine and its active metabolite norfluoxetine have especially long half-lives, so concentration changes and drug interactions can persist for weeks. Paroxetine has a shorter half-life and strongly inhibits CYP2D6, while citalopram has dose-related QT-prolongation concerns. Shorter-acting SSRIs are generally more likely to produce discontinuation symptoms after abrupt cessation.</p>
        <p>Additional risks include hyponatremia, increased bleeding tendency when combined with drugs that impair haemostasis, activation of mania in susceptible individuals, and increased suicidal thoughts or behaviour in some children, adolescents, and young adults early in treatment or after dose changes.</p>
      `
    }
  },
  {
    number: '6.8.2',
    name: 'SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)',
    sections: {
      overview: `
        <p>SNRIs are antidepressants that increase signaling from both serotonin and norepinephrine. Common examples include venlafaxine (Effexor), duloxetine (Cymbalta), and desvenlafaxine (Pristiq). They are used to treat depression and anxiety and are also particularly useful for certain types of chronic and neuropathic pain.</p>
      `,
      mechanism: `
        <p>SNRIs inhibit both the serotonin transporter (SERT) and norepinephrine transporter (NET), reducing reuptake of serotonin and norepinephrine into presynaptic neurons. This increases the concentration of both neurotransmitters in the synaptic cleft and increases stimulation of their postsynaptic receptors. Increased norepinephrine signaling is particularly relevant to pain modulation because norepinephrine-containing pathways descending from the brain can suppress pain transmission in the spinal cord.</p>
        <p>The contribution of each transporter varies by drug and dose. Venlafaxine inhibits SERT more strongly at lower therapeutic exposure and recruits greater NET inhibition as exposure increases, whereas duloxetine produces clinically relevant inhibition of both transporters across its usual range.</p>
        <p>For pain modulation, noradrenergic projections descending from the locus coeruleus and other pontine nuclei terminate in the spinal dorsal horn. Norepinephrine activates inhibitory &alpha;<sub>2</sub>-adrenergic receptors on primary-afferent and dorsal-horn neurons, reducing presynaptic glutamate and substance-P release and decreasing the firing of postsynaptic pain-transmission neurons.</p>
      `,
      effects: `
        <p>SNRIs can improve mood, motivation, attention, and anxiety, while their effects on norepinephrine signaling can also reduce certain forms of neuropathic and chronic pain. Common side effects include nausea, sleep changes, sweating, sexual dysfunction, and increases in blood pressure or heart rate, particularly with drugs that produce stronger norepinephrine effects.</p>
        <p>Norepinephrine can support alertness and descending pain inhibition, but excessive peripheral noradrenergic activity can increase sweating, pulse, and vascular tone. Venlafaxine therefore has dose-related blood-pressure effects that warrant monitoring.</p>
      `,
      pharmacokinetics: `
        <p>SNRIs are generally well absorbed and undergo hepatic metabolism, with elimination primarily through the kidneys. Their half-lives vary depending on the specific drug. They are used for depression, anxiety disorders, and several chronic pain conditions. Like SSRIs, they can cause serotonin syndrome when combined with other strongly serotonergic substances, and abrupt discontinuation can produce significant withdrawal-like symptoms, particularly with shorter-acting drugs such as venlafaxine.</p>
        <p>Venlafaxine is converted mainly by CYP2D6 into the active metabolite desvenlafaxine; both compounds contribute to its effect. Duloxetine is metabolized principally through CYP1A2 and CYP2D6. Clinically important risks include elevated blood pressure, discontinuation symptoms, serotonin syndrome, hyponatremia, bleeding risk, and possible activation of mania in susceptible individuals.</p>
      `
    }
  },
  {
    number: '6.8.3',
    name: 'TCAs (Tricyclic Antidepressants)',
    sections: {
      overview: `
        <p>TCAs are an older class of antidepressants named for their characteristic three-ring molecular structure. Examples include amitriptyline, nortriptyline, imipramine, and clomipramine. They remain useful for depression and several other conditions, particularly neuropathic pain and migraine prevention.</p>
      `,
      mechanism: `
        <p>TCAs primarily inhibit SERT and NET, increasing serotonin and norepinephrine concentrations in the synaptic cleft. However, unlike SSRIs and SNRIs, TCAs also interact with numerous other receptors. They can block muscarinic acetylcholine receptors, histamine H1 receptors, and &alpha;1-adrenergic receptors, producing additional physiological effects. For example, H1 receptor blockade contributes to sedation, muscarinic blockade contributes to dry mouth and constipation, and &alpha;1 blockade can cause orthostatic hypotension.</p>
        <p>The receptor profile differs between individual TCAs: clomipramine is especially potent at SERT, whereas secondary-amine TCAs such as nortriptyline preferentially inhibit NET. Their analgesic effects also involve strengthened descending serotonergic and noradrenergic inhibition of spinal pain transmission and, for some compounds, direct blockade of neuronal sodium channels.</p>
      `,
      effects: `
        <p>TCAs can reduce symptoms of depression and are particularly useful for neuropathic pain. Their additional receptor actions can produce sedation, dry mouth, blurred vision, constipation, urinary retention, dizziness, and weight gain. These effects are largely responsible for their poorer tolerability compared with newer antidepressants.</p>
        <p>Central and peripheral muscarinic blockade can additionally cause confusion, impaired accommodation, tachycardia, and worsening urinary retention, while H1 blockade promotes appetite and weight gain. These off-target effects become especially pronounced in overdose.</p>
      `,
      pharmacokinetics: `
        <p>TCAs are generally well absorbed and extensively metabolized by hepatic enzymes. Many are highly lipid-soluble and have relatively long half-lives. A major risk is cardiotoxicity during overdose: TCAs can block cardiac sodium channels, slowing electrical conduction through the heart and potentially producing dangerous arrhythmias. Because of this relatively narrow safety margin, TCAs are generally less preferred for treating depression when safer alternatives are available.</p>
        <p>CYP2D6 and CYP2C19 contribute substantially to the metabolism of many TCAs, and several form active metabolites—for example, amitriptyline is converted to nortriptyline. Genetic variation, metabolic inhibitors, and drug interactions can therefore produce large differences in exposure.</p>
        <p>Fast cardiac sodium-channel blockade slows ventricular depolarization and widens the QRS complex; potassium-channel effects can further disturb repolarization. Severe poisoning can cause hypotension, ventricular arrhythmias, seizures, coma, and death, making suspected overdose a medical emergency.</p>
      `
    }
  },
  {
    number: '6.8.4',
    name: 'MAOIs (Monoamine Oxidase Inhibitors)',
    sections: {
      overview: `
        <p>MAOIs are an older class of antidepressants that increase the availability of serotonin, norepinephrine, and dopamine by inhibiting monoamine oxidase, the enzyme responsible for breaking down these neurotransmitters. Examples include phenelzine, tranylcypromine, and selegiline.</p>
      `,
      mechanism: `
        <p>Monoamine oxidase exists primarily as MAO-A and MAO-B, enzymes located on the outer mitochondrial membrane of neurons and other cells. They normally metabolize monoamine neurotransmitters after they are transported back into the presynaptic neuron. MAOIs inhibit these enzymes, reducing intracellular breakdown of serotonin, norepinephrine, and dopamine. This increases the amount of monoamine available for subsequent packaging into synaptic vesicles and release during neuronal signaling.</p>
        <p>MAO-A preferentially metabolizes serotonin, norepinephrine, and tyramine, whereas MAO-B contributes more strongly to dopamine and phenethylamine metabolism. Phenelzine and tranylcypromine irreversibly inhibit both forms. Selegiline preferentially inhibits MAO-B at lower exposure, but selectivity decreases as exposure rises; its transdermal antidepressant formulation can inhibit brain MAO while reducing first-pass inhibition of intestinal MAO-A at lower patch strengths.</p>
      `,
      effects: `
        <p>Increased monoamine signaling can improve mood, motivation, energy, and anxiety symptoms. However, MAOIs can also cause dizziness, insomnia, weight changes, and other side effects depending on the specific drug. Their effects on multiple monoamine systems can make them effective for some forms of depression that do not respond adequately to other antidepressants.</p>
        <p>Reduced breakdown increases the presynaptic stores and subsequent release of several monoamines simultaneously. This broad effect can be therapeutically useful but also produces orthostatic hypotension, sleep disturbance, and a larger interaction burden than transporter-selective antidepressants.</p>
      `,
      pharmacokinetics: `
        <p>MAOIs are absorbed orally and undergo varying degrees of hepatic metabolism. Some irreversibly inhibit MAO, meaning that enzyme activity remains suppressed until the body produces new enzyme, which can take approximately two weeks or longer. This creates important drug and dietary interactions. Excessive accumulation of serotonin can cause serotonin syndrome, while excessive norepinephrine can produce dangerous increases in blood pressure. Certain MAOIs also require restrictions on foods containing high levels of tyramine, an amine normally broken down by MAO in the gut; when MAO is inhibited, tyramine can enter the circulation and promote norepinephrine release, potentially causing a hypertensive crisis.</p>
        <p>Once absorbed, tyramine enters sympathetic nerve terminals through NET and is transported into storage vesicles by VMAT, displacing norepinephrine into the cytoplasm and driving a large non-vesicular release. The resulting surge in vascular norepinephrine can produce a rapid, potentially fatal hypertensive crisis.</p>
        <p>Irreversible MAO inhibition commonly requires a washout period of at least 14 days when switching to or from contraindicated serotonergic drugs; fluoxetine generally requires a longer interval because fluoxetine and norfluoxetine persist for weeks. Combining MAOIs with serotonin reuptake inhibitors, certain opioids, dextromethorphan, stimulants, or other interacting drugs can produce serotonin syndrome or dangerous cardiovascular reactions.</p>
      `
    }
  }
];

const neuropharmacologyCategories = {
  psychostimulants: psychostimulantTopics,
  opioids: opioidTopics,
  cannabis: cannabisTopics,
  psychedelics: psychedelicTopics,
  'depressants-anxiolytics': depressantTopics,
  antidepressants: antidepressantTopics
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
  const visibleInformationSections = topic.informationSections
    ? drugInformationSections.filter(({ key }) => topic.informationSections.includes(key))
    : drugInformationSections;

  return `
    <div class="drug-topic-panel__inner">
      <div class="drug-topic-panel__heading">
        <p class="drug-topic-panel__eyebrow">Reference outline</p>
        <h4>${panelTitle}</h4>
      </div>
      <div class="drug-topic-panel__sections">
        ${visibleInformationSections.map(({ key, title }, index) => `
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
