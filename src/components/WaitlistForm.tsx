import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Loader2 } from "lucide-react"
import { emailService } from "@/lib/emailService"

interface WaitlistFormProps {
    isOpen: boolean
    onClose: () => void
    source?: string
}

export const WaitlistForm = ({ isOpen, onClose, source = "waitlist" }: WaitlistFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name.trim() || !formData.email.trim()) return

        setIsLoading(true)
        setError("")

        try {
            // Use the real email service
            const result = await emailService.addToWaitlist(
                formData.name.trim(),
                formData.email.trim(),
                source
            )

            if (result.success) {
                setIsSuccess(true)
                setFormData({ name: "", email: "" })

                // Auto close after 3 seconds
                setTimeout(() => {
                    onClose()
                    setIsSuccess(false)
                }, 3000)
            } else {
                setError(result.message)
            }

        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleClose = () => {
        if (!isLoading) {
            setFormData({ name: "", email: "" })
            setError("")
            setIsSuccess(false)
            onClose()
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-sans text-center">
                        {isSuccess ? "Welcome to nuvori!" : "Join the Waitlist"}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        {isSuccess
                            ? "💛 Thanks for joining — check your email for a short 2-minute survey."
                            : "Be the first to know when nuvori launches. Help us build something that truly serves couples like you."
                        }
                    </DialogDescription>
                </DialogHeader>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8">
                        <CheckCircle className="h-16 w-16 text-accent mb-4" />
                        <p className="text-lg text-foreground/80 text-center">
                            Welcome to the nuvori community!
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                                disabled={isLoading}
                                className="text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                required
                                disabled={isLoading}
                                className="text-base"
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-red-500 text-center">{error}</p>
                        )}

                        <Button
                            type="submit"
                            className="w-full text-base py-3 btn btn-primary"
                            disabled={isLoading || !formData.name.trim() || !formData.email.trim()}
                            aria-label="Join the Nuvori waitlist"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Joining...
                                </>
                            ) : (
                                "Join the Waitlist"
                            )}
                        </Button>

                        <p className="text-xs text-foreground/60 text-center">
                            We respect your privacy. No spam, ever.
                        </p>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}
