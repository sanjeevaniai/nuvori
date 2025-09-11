import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface WaitlistEntry {
    id: number
    name: string
    email: string
    source: string
    created_at: string
}

export const WaitlistAdmin = () => {
    const [entries, setEntries] = useState<WaitlistEntry[]>([])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        loadEntries()
    }, [])

    const loadEntries = () => {
        const stored = localStorage.getItem('waitlist_entries')
        if (stored) {
            setEntries(JSON.parse(stored))
        }
    }

    const clearEntries = () => {
        if (confirm('Are you sure you want to clear all waitlist entries?')) {
            localStorage.removeItem('waitlist_entries')
            setEntries([])
        }
    }

    const exportEntries = () => {
        const dataStr = JSON.stringify(entries, null, 2)
        const dataBlob = new Blob([dataStr], { type: 'application/json' })
        const url = URL.createObjectURL(dataBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = `waitlist_entries_${new Date().toISOString().split('T')[0]}.json`
        link.click()
        URL.revokeObjectURL(url)
    }

    if (!isVisible) {
        return (
            <div className="fixed bottom-4 right-4 z-50">
                <Button
                    onClick={() => setIsVisible(true)}
                    variant="outline"
                    size="sm"
                    className="bg-background/80 backdrop-blur-sm"
                >
                    View Waitlist ({entries.length})
                </Button>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Waitlist Entries ({entries.length})</CardTitle>
                            <CardDescription>
                                Collected from your nuvori website
                            </CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button onClick={exportEntries} variant="outline" size="sm">
                                Export JSON
                            </Button>
                            <Button onClick={clearEntries} variant="destructive" size="sm">
                                Clear All
                            </Button>
                            <Button onClick={() => setIsVisible(false)} variant="outline" size="sm">
                                Close
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="overflow-y-auto max-h-[60vh]">
                    {entries.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            No waitlist entries yet
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {entries.map((entry) => (
                                <div key={entry.id} className="border rounded-lg p-4 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium">{entry.name}</h3>
                                            <p className="text-sm text-muted-foreground">{entry.email}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant="secondary">{entry.source}</Badge>
                                            <span className="text-xs text-muted-foreground">
                                                {new Date(entry.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
