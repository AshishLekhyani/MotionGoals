import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ChallengesContext } from '../store/challenges-context.jsx';
import ChallengeItem from '../components/ChallengeItem.jsx';
import ChallengeTabs from '../components/ChallengeTabs.jsx';
import Header from '../components/Header.jsx';

export default function ChallengesPage() {
    const { challenges } = useContext(ChallengesContext);
    const [selectedType, setSelectedType] = useState('active');
    const [expanded, setExpanded] = useState(null);

    function handleSelectType(newType) {
        setSelectedType(newType);
    }

    function handleViewDetails(id) {
        setExpanded((prevId) => (prevId === id ? null : id));
    }

    const filteredChallenges = {
        active: challenges.filter((challenge) => challenge.status === 'active'),
        completed: challenges.filter(
            (challenge) => challenge.status === 'completed'
        ),
        failed: challenges.filter((challenge) => challenge.status === 'failed'),
    };

    const displayedChallenges = filteredChallenges[selectedType];

    return (
        <>
            <Header />
            <main id="challenges">
                <ChallengeTabs
                    challenges={filteredChallenges}
                    onSelectType={handleSelectType}
                    selectedType={selectedType}
                >
                    <AnimatePresence mode="wait">
                        {displayedChallenges.length > 0 && (
                            <motion.ol
                                key="list"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="challenge-items"
                            >
                                <AnimatePresence>
                                    {displayedChallenges.map((challenge) => (
                                        <ChallengeItem
                                            key={challenge.id}
                                            challenge={challenge}
                                            onViewDetails={() => handleViewDetails(challenge.id)}
                                            isExpanded={expanded === challenge.id}
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.ol>
                        )}
                        {displayedChallenges.length === 0 && (
                            <motion.p
                                key="fallback"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                No challenges found.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </ChallengeTabs>
            </main>
        </>
    );
}
