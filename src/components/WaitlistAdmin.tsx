import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { emailService } from "@/lib/emailService";

interface WaitlistEntry {
    id: string;
    name: string;
    email: string;
    source: string;
    timestamp: string;
}

const WaitlistAdmin = () => {
    const [entries, setEntries] = useState<WaitlistEntry[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        loadEntries();
    }, []);

    const loadEntries = () => {
        const storedEntries = emailService.exportEntries();
        setEntries(storedEntries);
    };

    const clearEntries = () => {
        if (confirm("Are you sure you want to clear all waitlist entries?")) {
            localStorage.removeItem('nuvori_waitlist_entries');
            setEntries([]);
        }
    };

    const exportEntries = () => {
        const csvContent = [
            "Name,Email,Source,Date",
            ...entries.map(entry =>
                `"${entry.name}","${entry.email}","${entry.source}","${new Date(entry.timestamp).toLocaleDateString()}"`
            )
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nuvori-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    if (!isVisible) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <Button
                    onClick={() => setIsVisible(true)}
                    className="bg-accent text-accent-foreground"
                    size="sm"
                >
                    Admin ({entries.length})
                </Button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Waitlist Admin ({entries.length} entries)</h2>
                    <Button onClick={() => setIsVisible(false)} variant="ghost">
                        ✕
                    </Button>
                </div>

                <div className="flex gap-2 mb-4">
                    <Button onClick={loadEntries} size="sm">
                        Refresh
                    </Button>
                    <Button onClick={exportEntries} size="sm" variant="outline">
                        Export CSV
                    </Button>
                    <Button onClick={clearEntries} size="sm" variant="destructive">
                        Clear All
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-2">Name</th>
                                <th className="text-left p-2">Email</th>
                                <th className="text-left p-2">Source</th>
                                <th className="text-left p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry) => (
                                <tr key={entry.id} className="border-b">
                                    <td className="p-2">{entry.name}</td>
                                    <td className="p-2">{entry.email}</td>
                                    <td className="p-2">{entry.source}</td>
                                    <td className="p-2">{new Date(entry.timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {entries.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                        No waitlist entries yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export { WaitlistAdmin };
export default WaitlistAdmin;